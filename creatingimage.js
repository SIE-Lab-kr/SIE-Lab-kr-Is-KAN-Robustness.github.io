// Example folder and image data (this could come from a server-side script or API)
const imageFolders = {
"convnet-kan" :[
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080144_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080157_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080204_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080216_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080224_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_080235_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_080353_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_080510_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080047_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080058_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080106_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080117_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080125_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_080136_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_NoAttack_20241023_080043_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080244_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080256_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080303_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080315_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080323_dash.png",
    "ConvNet_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_080335_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075540_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075552_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075559_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075611_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075619_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_BIM_20241023_075630_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_CW_20241023_075748_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_CW_20241023_075904_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075442_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075453_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075501_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075512_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075520_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_FGSM_20241023_075532_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_NoAttack_20241023_075439_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075638_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075650_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075658_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075710_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075718_dash.png",
    "ConvNet_KAN_Standard_LatentSpace_Movement_PGD_20241023_075730_dash.png",
],
 "convnet-mlp" : [
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073203_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073214_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073221_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073233_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073241_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_073252_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_073408_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_073513_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073104_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073115_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073123_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073135_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073143_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_073154_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_NoAttack_20241023_073100_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073300_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073312_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073320_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073332_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073339_dash.png",
    "ConvNet_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_073351_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072611_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072623_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072630_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072642_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072649_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_BIM_20241023_072701_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_CW_20241023_072815_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_CW_20241023_072921_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072514_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072525_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072533_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072544_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072552_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_FGSM_20241023_072603_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_NoAttack_20241023_072511_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072709_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072720_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072728_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072740_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072748_dash.png",
    "ConvNet_MLP_Standard_LatentSpace_Movement_PGD_20241023_072800_dash.png",
],
"kanc-kan" : [
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222206_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222300_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222314_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222409_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222424_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_BIM_20241022_222519_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_CW_20241022_224259_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_001452_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222022_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222045_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222055_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222118_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222128_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241022_222152_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_NoAttack_20241022_222017_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222534_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222628_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222643_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222736_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222750_dash.png",
    "KANC_KAN_Randomized_Smoothing_LatentSpace_Movement_PGD_20241022_222844_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201252_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201347_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201401_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201455_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201510_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_BIM_20241022_201604_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_CW_20241022_203348_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_CW_20241022_220653_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201108_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201132_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201141_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201205_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201214_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_FGSM_20241022_201238_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_NoAttack_20241022_201103_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201619_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201713_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201728_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201822_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201837_dash.png",
    "KANC_KAN_Standard_LatentSpace_Movement_PGD_20241022_201931_dash.png",
],

"kanc-mlp" : [
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104505_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104559_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104613_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104706_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104721_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_BIM_20241023_104814_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_110547_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_CW_20241023_123719_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104321_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104344_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104354_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104417_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104427_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_FGSM_20241023_104450_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_NoAttack_20241023_104316_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_104829_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_104922_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_104936_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_105030_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_105045_dash.png",
    "KANC_MLP_Randomized_Smoothing_LatentSpace_Movement_PGD_20241023_105139_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_083839_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_083931_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_083945_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_084038_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_084052_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_BIM_20241023_084144_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_CW_20241023_085858_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_CW_20241023_102950_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083657_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083719_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083729_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083752_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083802_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_FGSM_20241023_083825_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_NoAttack_20241023_083652_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084159_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084252_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084306_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084359_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084413_dash.png",
    "KANC_MLP_Standard_LatentSpace_Movement_PGD_20241023_084505_dash.png",
]

};
// Base URL to your folder path (replace with your actual folder path)
const basePath = "CNN/";

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
