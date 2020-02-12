/* eslint-disable no-console */
import { LightningElement, track } from "lwc";
import getData from './data';


export default class DatatableExample extends LightningElement {
  columns = [
    {
      label: "Name",
      fieldName: "name"
    },
    {
      label: "Profession",
      fieldName: "profession"
    },
    {
      type: "action",
      typeAttributes: {
        rowActions: { fieldName: "rowActions" }
      }
    }
  ];
  @track data = [];
  @track selectedAction;

  async connectedCallback() {
    this.data = await getData();
}

  handleRowAction(event) {
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    console.log('Selected Row => ' + JSON.stringify(row.name));
    console.log('Action Selected => ' + JSON.stringify(actionName));
  }

}
