"""
Download all images from metal-works.ch pages.
Saves to brand_assets/metal-works.ch/images/
"""
import ssl
import urllib.request
import re
import os
import hashlib

# Disable SSL verification
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'brand_assets', 'metal-works.ch', 'images')
os.makedirs(BASE_DIR, exist_ok=True)

# All pages to scrape
pages = {
    'homepage': 'https://www.metal-works.ch/',
    'feuerkugeln': 'https://www.metal-works.ch/feuerkugeln',
    'feuerkubus': 'https://www.metal-works.ch/feuerkubus-mit-grillring',
    'feuerschale': 'https://www.metal-works.ch/feuerschalemitgrillplatte',
    'holzlager': 'https://www.metal-works.ch/holzlager',
    'moebel': 'https://www.metal-works.ch/moebel',
    'springbrunnen': 'https://www.metal-works.ch/springbrunnen',
    'angebot1': 'https://www.metal-works.ch/angebot1',
    'angebot2': 'https://www.metal-works.ch/angebot2',
    'kontakt': 'https://www.metal-works.ch/kontakt',
}

all_images = {}  # page_name -> list of image URLs

for page_name, url in pages.items():
    print(f"\n--- Scraping {page_name}: {url} ---")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        response = urllib.request.urlopen(req, context=ctx)
        html = response.read().decode('utf-8')
        
        images = set()
        
        # Find Wix static image URLs (main pattern for this Wix site)
        wix_pattern = re.compile(r'(https://static\.wixstatic\.com/media/[^\"\'\s>\\]+)', re.IGNORECASE)
        for match in wix_pattern.finditer(html):
            img = match.group(1).split('"')[0].split("'")[0].split('\\')[0]
            # Get the higher resolution version
            images.add(img)
        
        # Also standard img src
        img_pattern = re.compile(r'(?:src|data-src)=[\"\'](https?://[^\"\']*\.(?:jpg|jpeg|png|gif|webp|svg|bmp)[^\"\'>]*)', re.IGNORECASE)
        for match in img_pattern.finditer(html):
            images.add(match.group(1))
        
        all_images[page_name] = sorted(images)
        print(f"  Found {len(images)} image URLs")
        
    except Exception as e:
        print(f"  Error: {e}")

# Deduplicate: extract unique base media IDs from Wix URLs
unique_images = {}
for page_name, imgs in all_images.items():
    for img_url in imgs:
        # Extract the media ID for dedup
        match = re.search(r'/media/([^/]+?)(?:/|$)', img_url)
        if match:
            media_id = match.group(1)
            # Prefer larger versions
            if media_id not in unique_images or len(img_url) > len(unique_images[media_id]['url']):
                # Try to get a larger version
                large_url = img_url
                if 'fill/w_' in img_url:
                    # Replace small dimensions with larger ones
                    large_url = re.sub(r'fill/w_\d+,h_\d+', 'fill/w_1200,h_900', img_url)
                unique_images[media_id] = {'url': large_url, 'original_url': img_url, 'page': page_name}
        else:
            key = hashlib.md5(img_url.encode()).hexdigest()[:12]
            unique_images[key] = {'url': img_url, 'original_url': img_url, 'page': page_name}

print(f"\n=== Found {len(unique_images)} unique images across all pages ===\n")

# Download all unique images
downloaded = 0
failed = 0
manifest = []

for media_id, info in sorted(unique_images.items()):
    url = info['url']
    page = info['page']
    
    # Determine file extension
    ext = 'jpg'
    if '.png' in url.lower():
        ext = 'png'
    elif '.webp' in url.lower():
        ext = 'webp'
    elif '.gif' in url.lower():
        ext = 'gif'
    elif '.svg' in url.lower():
        ext = 'svg'
    
    # Clean filename
    clean_id = re.sub(r'[^a-zA-Z0-9_-]', '_', media_id)[:60]
    filename = f"{page}_{clean_id}.{ext}"
    filepath = os.path.join(BASE_DIR, filename)
    
    if os.path.exists(filepath):
        print(f"  [SKIP] {filename}")
        manifest.append({'file': filename, 'page': page, 'url': info['original_url']})
        downloaded += 1
        continue
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        response = urllib.request.urlopen(req, context=ctx, timeout=15)
        data = response.read()
        
        with open(filepath, 'wb') as f:
            f.write(data)
        
        size_kb = len(data) / 1024
        print(f"  [OK] {filename} ({size_kb:.1f} KB)")
        manifest.append({'file': filename, 'page': page, 'url': info['original_url']})
        downloaded += 1
    except Exception as e:
        print(f"  [FAIL] {filename}: {e}")
        failed += 1

print(f"\n=== Download complete: {downloaded} OK, {failed} failed ===")

# Save manifest
manifest_path = os.path.join(BASE_DIR, 'image_manifest.txt')
with open(manifest_path, 'w') as f:
    for item in manifest:
        f.write(f"{item['file']} | {item['page']} | {item['url']}\n")
print(f"Manifest saved to: {manifest_path}")
