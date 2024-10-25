// Example folder and image data (this could come from a server-side script or API)
const imageFolders = {
"FGSM": [
    "KAN_Adversarial_FGSM_fgsm_20241021_083818_699_dash.png",
    "KAN_Adversarial_FGSM_fgsm_20241021_083918_834_dash.png",
    "KAN_Adversarial_FGSM_fgsm_20241021_084019_493_dash.png",
    "KAN_Adversarial_PGD_fgsm_20241021_095026_064_dash.png",
    "KAN_Adversarial_PGD_fgsm_20241021_095126_754_dash.png",
    "KAN_Adversarial_PGD_fgsm_20241021_095227_722_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120711_469_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120812_308_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120913_224_dash.png",
    "KAN_Randomized_Smoothing_fgsm_20241021_105321_494_dash.png",
    "KAN_Randomized_Smoothing_fgsm_20241021_105422_832_dash.png",
    "KAN_Randomized_Smoothing_fgsm_20241021_105524_391_dash.png",
    "KAN_Standard_fgsm_20241021_073620_388_dash.png",
    "KAN_Standard_fgsm_20241021_073720_597_dash.png",
    "KAN_Standard_fgsm_20241021_073821_049_dash.png",
],
"PGD": [
    "KAN_Adversarial_FGSM_pgd_20241021_084423_717_dash.png",
    "KAN_Adversarial_FGSM_pgd_20241021_084524_709_dash.png",
    "KAN_Adversarial_FGSM_pgd_20241021_084626_104_dash.png",
    "KAN_Adversarial_PGD_pgd_20241021_095633_686_dash.png",
    "KAN_Adversarial_PGD_pgd_20241021_095734_792_dash.png",
    "KAN_Adversarial_PGD_pgd_20241021_095836_249_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121319_922_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121421_663_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121523_306_dash.png",
    "KAN_Randomized_Smoothing_pgd_20241021_105934_472_dash.png",
    "KAN_Randomized_Smoothing_pgd_20241021_110036_931_dash.png",
    "KAN_Randomized_Smoothing_pgd_20241021_110139_511_dash.png",
    "KAN_Standard_pgd_20241021_074225_330_dash.png",
    "KAN_Standard_pgd_20241021_074326_556_dash.png",
    "KAN_Standard_pgd_20241021_074427_695_dash.png",
],
"CW": [
    "KAN_Adversarial_FGSM_cw_20241021_084737_394_dash.png",
    "KAN_Adversarial_PGD_cw_20241021_095948_183_dash.png",
    "KAN_Adversarial_PGD_with_Smoothing_cw_20241021_121635_330_dash.png",
    "KAN_Randomized_Smoothing_cw_20241021_110252_824_dash.png",
    "KAN_Standard_cw_20241021_074539_209_dash.png",
],
"BIM": [
]
};
// Base URL to your folder path (replace with your actual folder path)
const basePath = "KAN/";

function generateGallery() {
    const galleryDiv = document.getElementById('gallery');

    // Loop through each folder
    for (let folder in imageFolders) {
        // Create a new div for the folder
        let folderDiv = document.createElement('div');
        folderDiv.classList.add('folder');

        // Create and append a heading for the folder
        let folderHeading = document.createElement('h2');
        folderHeading.textContent = folder;
        folderDiv.appendChild(folderHeading);

        // Loop through each image in the folder
        imageFolders[folder].forEach(image => {
            let imgElement = document.createElement('img');
            imgElement.src = `${basePath}${folder}/${image}`;
            imgElement.alt = image;
            folderDiv.appendChild(imgElement);
        });

        // Append the folder div to the gallery container
        galleryDiv.appendChild(folderDiv);
    }
}

// Call the function to generate the gallery when the page loads
window.onload = generateGallery;
