import os

# Define the root folder where your attack folders are located
root_folder = "KAN"

# Define the attack folders you want to scan
attack_folders = ["fgsm", "pgd", "cw", "gim"]

# Define valid image extensions
valid_extensions = (".png", ".jpg", ".jpeg")

# Output JavaScript filename
output_js = "generated_image_lists.js"

# Function to generate the JS list of images for each folder
def generate_js_file():
    js_content = "// Auto-generated JavaScript file containing image lists for each attack folder\n\n"

    for folder in attack_folders:
        folder_path = os.path.join(root_folder, folder)

        # Check if the folder exists
        if not os.path.exists(folder_path):
            print(f"Folder {folder_path} does not exist. Skipping...")
            continue

        # List image files in the folder
        image_files = [f for f in os.listdir(folder_path) if f.endswith(valid_extensions)]

        if not image_files:
            print(f"No image files found in {folder}.")
            continue

        # Add the folder name and images to the JS content
        js_content += f"// {folder} Attack Folder\n"
        js_content += f"const {folder.lower()}Images = [\n"

        for image in image_files:
            img_path = f'"{root_folder}/{folder}/{image}",'
            js_content += f"    {img_path}\n"

        js_content += "];\n\n"

    # Write the generated JS content to the output file
    with open(output_js, "w") as js_file:
        js_file.write(js_content)

    print(f"JavaScript file generated: {output_js}")

# Run the function to generate the JS file
generate_js_file()
