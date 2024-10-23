import os
from bs4 import BeautifulSoup

# Define the directory where your HTML files are located
html_directory = 'index.html'  # Change this to your directory

# Define the directory where your HTML files are located
html_directory = 'inded.html'  # Change this to your directory

# Function to revert the HTML file
def revert_html_file(file_path):
    # Open and read the HTML file
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find all divs with the class 'slide'
    slides = soup.find_all('div', class_='slide')

    # Loop through each slide div
    for slide in slides:
        # Find the img and the anchor tag within the slide
        img = slide.find('img')
        link = slide.find('a')  # Finding the 'a' tag inside the slide

        # If both img and link exist
        if img and link:
            # Restore the onclick attribute (this is what was originally there)
            img_src = img.get('src')
            link['onclick'] = f"openFullImage('{img_src}'); return false;"

            # Ensure the class attribute includes 'view-full-btn'
            if 'class' in link.attrs:
                # If the class already exists, append 'view-full-btn' if not present
                if 'view-full-btn' not in link['class']:
                    link['class'].append('view-full-btn')
            else:
                # If the class attribute does not exist, add 'view-full-btn'
                link['class'] = ['view-full-btn']

    # Save the modified HTML back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup.prettify()))

# Function to revert all HTML files in a directory
def revert_all_html_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                print(f"Reverting {file_path}...")
                revert_html_file(file_path)

# Run the script to revert all HTML files in the directory
revert_all_html_files(html_directory)
