const jobs = [
    {
      id: 1,
      name: 'Design website layout',
      description: '',
      order_in_sheet:50,
      order_in_pieces:100,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'John Doe',
      updated_at: '2024-05-11',
      created_at: '2024-05-18'
    },
    {
      id: 2,
      name: 'Develop backend API',
      description: '',
      order_in_sheet: 15, 
      order_in_pieces: 30,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'Jane Smith',
      updated_at: '2024-05-11',
      created_at: '2024-05-17'
    },
    {
      id: 3,
      name: 'Create marketing campaign',
      description: '',
      order_in_sheet: 5, 
      order_in_pieces: 10,
      deliver_date: '2024-05-20',
      costing_req: false,
      account_of: "tester",
      client_name: "Kababjees",
      updated_by: "monis",
      created_by: 'Emily Johnson',
      updated_at: '2024-05-11',
      created_at: '2024-05-16'
    }
  ];

const sizes = [];

const cuttingRequests = [
    {
      CuttingRequestID: 1,
      JobID: 2,
      ProductName: "1KG Mithai Box",
      sheet: {
        material: "",
        GSM: "",
        packets: "",
        cuttingSize: ""
      }
    },{
      CuttingRequestID: 2,
      JobID: 2,
      ProductName: "1KG Mithai Box",
      sheet: {
        material: "",
        GSM: "",
        packets: "",
        cuttingSize: ""
      }
    }
  ];


export {
    jobs,
    sizes,
    cuttingRequests
}