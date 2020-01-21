import { LightningElement, track, api } from "lwc";

export default class GenericLightningButtonLWC extends LightningElement {
  @track value = "success";
  @track variantValue = "success";
  @api labelValue = "My Label";
  @api titleValue = "My Title";
  @track disabledValue = false;
  get options() {
    return [
      { label: "Success", value: "success" },
      { label: "Base", value: "base" },
      { label: "Neutral", value: "Neutral" },
      { label: "Brand", value: "brand" },
      { label: "Destructive", value: "destructive" }
    ];
  }
  handleChange(event) {
    const selectedOption = event.detail.value;
    this.variantValue = selectedOption;
  }
  handleLabelValueChange(event) {
    const lValue = event.detail.value;
    this.labelValue = lValue;
    if (this.labelValue === "") {
      this.labelValue = "My Label";
    } else {
      this.labelValue = lValue;
    }
  }
  handleTitleValueChange(event) {
    const tValue = event.detail.value;
    this.titleValue = tValue;
    if (this.titleValue === "") {
      this.titleValue = "My Title";
    } else {
      this.titleValue = tValue;
    }
  }
  disabledToggleValue(event) {
    this.disabledValue = event.target.checked;
  }
  resetValues() {
    this.variantValue = "success";
    this.labelValue = "My Label";
    this.titleValue = "My Title";
    this.disabledValue = false;
  }
}
