const data = {
  headers: [
    { label: 'PATIENT NAME', id: 'patientName', order: 1 },
    { label: 'ORDER DATE', id: 'orderDate', order: 2 },
    { label: 'METADATA', id: 'metaData', order: 3 },
    { label: 'MEDICATION', id: 'medication', order: 4 },
  ],
  patients: [
    {
      patientName: 'Rebecca Halas',
      orderDate: 'January 29, 2018',
      metaData: 'GoodRx',
      medication: 'Hydrocodone',
      color: 'lightgreen',
      id: 1
    },
    {
      patientName: 'Jeff White',
      orderDate: 'January 29, 2018',
      metaData: 'Roman',
      medication: 'Zocor',
      color: 'lightblue',
      id: 2
    },
    {
      patientName: 'Mark Cahoon',
      orderDate: 'January 28, 2018',
      metaData: 'Roman',
      medication: 'Lisinopril',
      color: 'lightgreen',
      id: 3
    },
    {
      patientName: 'John Travolta',
      orderDate: 'January 27, 2018',
      metaData: 'Hims',
      medication: 'Synthroid',
      color: 'red',
      id: 5
    }
  ]
}


export default class TableData {
  constructor() {
    this.data = data;
  }

  getData = () => {
    return this.data;
  }
}