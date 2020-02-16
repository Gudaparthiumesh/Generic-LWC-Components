import {
    LightningElement,
    track,
    api
} from "lwc";

export default class GenericLightningButtonLWC extends LightningElement {
    @track variantValue = "brand";
    @api sizeofSpinner = "small";
    @api labelValue = 'Loading.....';
    @api isInverse = false;
    get sizeOptions() {
        return [{
                label: "small",
                value: "small"
            },
            {
                label: "medium",
                value: "medium"
            },
            {
                label: "large",
                value: "large"
            }
        ];
    }
    get variantOptions() {
        return [{
                label: "brand",
                value: "brand"
            },
            {
                label: "inverse",
                value: "inverse"
            }
        ];
    }
    handleSizeChange(event) {
        const selectedOption = event.detail.value;
        if (selectedOption === 'small') {
            this.sizeofSpinner = selectedOption;
        } else if (selectedOption === 'medium') {
            this.sizeofSpinner = selectedOption;
        } else {
            this.sizeofSpinner = selectedOption;
        }

    }
    handleVariantChange(event) {
        const selectedOption = event.detail.value;
        if (selectedOption === 'brand') {
            this.variantValue = selectedOption;
            this.isInverse = false;
        } else if (selectedOption === 'inverse') {
            this.variantValue = selectedOption;
            this.isInverse = true;
        }

    }
    handleLabelValueChange(event) {
        const tValue = event.detail.value;
        this.labelValue = tValue;
        if (this.labelValue === "") {
            this.labelValue = "Loading.....";
        } else {
            this.labelValue = tValue;
        }
    }
    resetValues() {
        this.variantValue = "brand";
        this.labelValue = "Loading.....";
        this.sizeofSpinner = 'small';
    }
}