document.addEventListener("DOMContentLoaded", function() {
    // Manually add the image lists for each attack folder
    const attackFolders = {
        "FGSM": [
            "KAN/fgsm/KAN_Adversarial_FGSM_fgsm_20241021_083818_699_dash.png",
            "KAN/fgsm/KAN_Adversarial_FGSM_fgsm_20241021_083918_834_dash.png",
            "KAN/fgsm/KAN_Adversarial_FGSM_fgsm_20241021_084019_493_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_fgsm_20241021_095026_064_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_fgsm_20241021_095126_754_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_fgsm_20241021_095227_722_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120711_469_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120812_308_dash.png",
            "KAN/fgsm/KAN_Adversarial_PGD_with_Smoothing_fgsm_20241021_120913_224_dash.png",
            "KAN/fgsm/KAN_Randomized_Smoothing_fgsm_20241021_105321_494_dash.png",
            "KAN/fgsm/KAN_Randomized_Smoothing_fgsm_20241021_105422_832_dash.png",
            "KAN/fgsm/KAN_Randomized_Smoothing_fgsm_20241021_105524_391_dash.png",
            "KAN/fgsm/KAN_Standard_fgsm_20241021_073620_388_dash.png",
            "KAN/fgsm/KAN_Standard_fgsm_20241021_073720_597_dash.png",
            "KAN/fgsm/KAN_Standard_fgsm_20241021_073821_049_dash.png",
        ],
        "PGD": [
            "KAN/pgd/KAN_Adversarial_FGSM_pgd_20241021_084423_717_dash.png",
            "KAN/pgd/KAN_Adversarial_FGSM_pgd_20241021_084524_709_dash.png",
            "KAN/pgd/KAN_Adversarial_FGSM_pgd_20241021_084626_104_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_pgd_20241021_095633_686_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_pgd_20241021_095734_792_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_pgd_20241021_095836_249_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121319_922_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121421_663_dash.png",
            "KAN/pgd/KAN_Adversarial_PGD_with_Smoothing_pgd_20241021_121523_306_dash.png",
            "KAN/pgd/KAN_Randomized_Smoothing_pgd_20241021_105934_472_dash.png",
            "KAN/pgd/KAN_Randomized_Smoothing_pgd_20241021_110036_931_dash.png",
            "KAN/pgd/KAN_Randomized_Smoothing_pgd_20241021_110139_511_dash.png",
            "KAN/pgd/KAN_Standard_pgd_20241021_074225_330_dash.png",
            "KAN/pgd/KAN_Standard_pgd_20241021_074326_556_dash.png",
            "KAN/pgd/KAN_Standard_pgd_20241021_074427_695_dash.png",
        ],
        "CW": [
            "KAN/cw/KAN_Adversarial_FGSM_cw_20241021_084737_394_dash.png",
            "KAN/cw/KAN_Adversarial_PGD_cw_20241021_095948_183_dash.png",
            "KAN/cw/KAN_Adversarial_PGD_with_Smoothing_cw_20241021_121635_330_dash.png",
            "KAN/cw/KAN_Randomized_Smoothing_cw_20241021_110252_824_dash.png",
            "KAN/cw/KAN_Standard_cw_20241021_074539_209_dash.png",
        ],
        "BIM": [
        ]
    };


    const attackMethodTabs = document.getElementById("attack-method-tabs-e");
    const attackMethodContent = document.getElementById("attack-method-content-e");

    // Function to create tabs dynamically
    function createTabs() {
        Object.keys(attackFolders).forEach((folder) => {
            // Create a tab button for each attack method
            const button = document.createElement("button");
            button.className = "sub-tablink";
            button.textContent = `${folder} Attack`;
            button.setAttribute("data-tab", folder);
            button.addEventListener("click", () => showAttackMethod(folder));

            attackMethodTabs.appendChild(button);

            // Create content section for each attack method
            const attackDiv = document.createElement("div");
            attackDiv.id = folder;
            attackDiv.className = "method-content";
            attackDiv.style.display = "none";  // Initially hidden
            attackDiv.innerHTML = `
                <h6>${folder} Attack Results</h6>
                <div class="slider-container">
                    <div class="slider" id="slider-${folder}">
                        ${getImageSlides(folder)}
                    </div>
                </div>
            `;

            attackMethodContent.appendChild(attackDiv);
        });
    }

    // Function to generate image slides based on folder name
    function getImageSlides(folder) {
        const images = attackFolders[folder];  // Get images for the current folder
        let slidesHTML = '';

        images.forEach((imgSrc, index) => {
            slidesHTML += `
                <div class="slide">
                    <img src="${imgSrc}" alt="${folder} Result ${index + 1}">
                    <h6>Title: ${folder} Attack Example ${index + 1}</h6>
                    <a href="${imgSrc}" class="view-full-btn" target="_blank">View Full Image</a>
                </div>
            `;
        });

        return slidesHTML;
    }

    // Function to show the selected attack method content
    function showAttackMethod(attackName) {
        const allContentDivs = document.querySelectorAll(".method-content");
        allContentDivs.forEach(div => div.style.display = "none");  // Hide all others

        document.getElementById(attackName).style.display = "block";  // Show the selected one
    }

    // Initialize tabs and content sections
    createTabs();

    // Optionally, show the first tab by default
    showAttackMethod(Object.keys(attackFolders)[0]);
});
