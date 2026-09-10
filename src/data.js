export const USERS = [
  { code: '1001', name: 'Dr. Demo Consultant', role: 'Consultant Physician', unit: 'Head, Medicine', canSign: true },
  { code: '1002', name: 'Dr. Demo HDU Physician', role: 'Consultant Physician', unit: 'Physician, HDU Medical Management', canSign: true },
  { code: '1101', name: 'Dr. Demo Resident One', role: 'Junior Physician/Resident', unit: 'Medical Officer', canSign: false },
  { code: '1102', name: 'Dr. Demo Resident Two', role: 'Junior Physician/Resident', unit: 'Medical Officer', canSign: false },
  { code: '1103', name: 'Dr. Demo Resident Three', role: 'Junior Physician/Resident', unit: 'Medical Officer', canSign: false },
  { code: '9001', name: 'Demo System Administrator', role: 'System Admin', unit: 'Governance', canSign: true }
];

export const NAV = [
  ['dashboard', 'speedometer2', 'Physician Dashboard'], ['queue', 'list-task', 'Work Queue'],
  ['patients', 'people', 'Admitted Patients'], ['assessment', 'clipboard2-pulse', 'New Assessment'],
  ['optimization', 'activity', 'Review & Optimization'], ['fitness', 'patch-check', 'Surgical Fitness'],
  ['orders', 'journal-medical', 'Medical Orders'], ['laboratory', 'droplet-half', 'Laboratory Results'],
  ['radiology', 'radioactive', 'Radiology Imaging'], ['notes', 'file-earmark-medical', 'Progress Notes'],
  ['handover', 'arrow-left-right', 'Handover'], ['completed', 'archive', 'Completed Cases'],
  ['reports', 'bar-chart', 'Reports'], ['master', 'sliders', 'Department Master']
];

export const PATIENTS = [
  { id:'p1', name:'Demo Patient A', initials:'PA', uhid:'DEMO-UH001', admission:'DEMO-IPD001', age:62, gender:'Male', ward:'4F', room:'412', bed:'A', consultant:'Dr. Demo Spine One', diagnosis:'Lumbar canal stenosis L3-L5', procedure:'L3-L5 decompression and fusion', surgery:'12 Sep 2026', comorbidity:'Hypertension', assessment:'Completed', investigation:'Reviewed', fitness:'Fit for Proposed Surgery', risk:'Moderate', assigned:'Dr. Demo Consultant', due:'Completed', update:'18 min ago', action:'Routine monitoring', allergy:'NKDA', fall:'High', nbm:'From 02:00, 12 Sep', alerts:[], category:'Fit' },
  { id:'p2', name:'Demo Patient B', initials:'PB', uhid:'DEMO-UH002', admission:'DEMO-IPD002', age:58, gender:'Female', ward:'5F', room:'507', bed:'B', consultant:'Dr. Demo Spine Two', diagnosis:'L4-L5 spondylolisthesis', procedure:'MIS TLIF L4-L5', surgery:'13 Sep 2026', comorbidity:'Diabetes, HbA1c 9.2%', assessment:'Completed', investigation:'Abnormal', fitness:'Optimization Required', risk:'High', assigned:'Dr. Demo HDU Physician', due:'Today, 12:30', update:'9 min ago', action:'Review glucose profile', allergy:'Penicillin', fall:'Moderate', nbm:'Not ordered', alerts:['Uncontrolled glucose'], category:'Optimization required' },
  { id:'p3', name:'Demo Patient C', initials:'PC', uhid:'DEMO-UH003', admission:'DEMO-IPD003', age:67, gender:'Male', ward:'HDU', room:'H02', bed:'2', consultant:'Dr. Demo Spine Three', diagnosis:'Cervical myelopathy C4-C6', procedure:'ACDF C4-C6', surgery:'11 Sep 2026', comorbidity:'IHD, dyslipidaemia', assessment:'In progress', investigation:'Critical', fitness:'Investigations Pending', risk:'Critical', assigned:'Dr. Demo Consultant', due:'Overdue by 42 min', update:'3 min ago', action:'Acknowledge abnormal ECG', allergy:'NKDA', fall:'High', nbm:'Active since 00:00', alerts:['Abnormal ECG', 'Cardiology review pending'], category:'Abnormal result' },
  { id:'p4', name:'Demo Patient D', initials:'PD', uhid:'DEMO-UH004', admission:'DEMO-IPD004', age:71, gender:'Female', ward:'4F', room:'408', bed:'A', consultant:'Dr. Demo Spine One', diagnosis:'Osteoporotic D12 compression fracture', procedure:'D12 vertebroplasty', surgery:'14 Sep 2026', comorbidity:'COPD', assessment:'Completed', investigation:'Reviewed', fitness:'Fit with Conditions', risk:'High', assigned:'Dr. Demo HDU Physician', due:'Review 16:00', update:'27 min ago', action:'Confirm HDU bed', allergy:'Sulfa drugs', fall:'High', nbm:'Planned', alerts:['Post-op HDU monitoring'], category:'Conditionally fit' },
  { id:'p5', name:'Demo Patient E', initials:'PE', uhid:'DEMO-UH005', admission:'DEMO-IPD005', age:54, gender:'Male', ward:'3F', room:'319', bed:'A', consultant:'Dr. Demo Spine Two', diagnosis:'L5-S1 disc prolapse', procedure:'L5-S1 microdiscectomy', surgery:'Pending', comorbidity:'New fever', assessment:'Completed', investigation:'Pending', fitness:'Temporarily Not Fit', risk:'High', assigned:'Dr. Demo Resident Two', due:'Today, 14:00', update:'12 min ago', action:'Review infection screen', allergy:'NKDA', fall:'Moderate', nbm:'Stopped', alerts:['Fever 38.4°C'], category:'Not fit' },
  { id:'p6', name:'Demo Patient F', initials:'PF', uhid:'DEMO-UH006', admission:'DEMO-IPD006', age:46, gender:'Female', ward:'HDU', room:'H04', bed:'1', consultant:'Dr. Demo Spine Three', diagnosis:'Thoracic intradural tumour', procedure:'D7-D9 laminectomy, excision', surgery:'Completed 9 Sep', comorbidity:'Post-op hypokalaemia', assessment:'Review due', investigation:'Abnormal', fitness:'Review Required', risk:'High', assigned:'Dr. Demo Resident One', due:'In 24 min', update:'5 min ago', action:'Correct potassium, repeat K+', allergy:'NKDA', fall:'High', nbm:'No', alerts:['K+ 2.9 mmol/L'], category:'Review due' }
];

export const INVESTIGATIONS = [
  {name:'Haemoglobin', result:'10.4 g/dL', range:'12.0–15.0', flag:'Low', time:'10 Sep, 08:22', status:'Final', clinician:'Dr. Demo Physician', action:'Review anaemia plan'},
  {name:'HbA1c', result:'9.2%', range:'4.0–5.6', flag:'Critical', time:'10 Sep, 09:05', status:'Final', clinician:'Dr. Demo Physician', action:'Glycaemic optimization'},
  {name:'Creatinine', result:'1.1 mg/dL', range:'0.6–1.2', flag:'Normal', time:'10 Sep, 08:22', status:'Final', clinician:'Dr. Demo Physician', action:'None'},
  {name:'ECG', result:'Sinus rhythm', range:'Clinical review', flag:'Normal', time:'10 Sep, 09:40', status:'Final', clinician:'Dr. Demo Consultant', action:'Document interpretation'}
];

export const LAB_RESULTS = [
  {id:'l1',patientId:'p2',panel:'Glycaemic profile',test:'Random blood glucose',specimen:'Plasma',result:'286 mg/dL',range:'70–140',flag:'Critical',status:'Final',collected:'10 Sep, 09:02',reported:'10 Sep, 09:28',lab:'Biochemistry',action:'Immediate glucose-control review'},
  {id:'l2',patientId:'p2',panel:'Glycaemic profile',test:'HbA1c',specimen:'EDTA whole blood',result:'9.2%',range:'4.0–5.6',flag:'High',status:'Final',collected:'10 Sep, 08:12',reported:'10 Sep, 09:05',lab:'Biochemistry',action:'Optimization before surgery'},
  {id:'l3',patientId:'p2',panel:'Renal profile',test:'Serum creatinine',specimen:'Serum',result:'1.1 mg/dL',range:'0.6–1.2',flag:'Normal',status:'Final',collected:'10 Sep, 08:12',reported:'10 Sep, 08:54',lab:'Biochemistry',action:'No action'},
  {id:'l4',patientId:'p2',panel:'Haematology',test:'Haemoglobin',specimen:'EDTA whole blood',result:'10.4 g/dL',range:'12.0–15.0',flag:'Low',status:'Final',collected:'10 Sep, 08:12',reported:'10 Sep, 08:42',lab:'Haematology',action:'Review perioperative anaemia'},
  {id:'l5',patientId:'p2',panel:'Urine examination',test:'Urine routine microscopy',specimen:'Urine',result:'Processing',range:'',flag:'Pending',status:'In process',collected:'10 Sep, 10:04',reported:'Expected 11:30',lab:'Clinical Pathology',action:'Await result'},
  {id:'l6',patientId:'p3',panel:'Coagulation',test:'PT / INR',specimen:'Citrated plasma',result:'1.02 INR',range:'0.8–1.2',flag:'Normal',status:'Final',collected:'10 Sep, 07:50',reported:'10 Sep, 08:31',lab:'Haematology',action:'No action'},
  {id:'l7',patientId:'p6',panel:'Electrolytes',test:'Serum potassium',specimen:'Serum',result:'2.9 mmol/L',range:'3.5–5.1',flag:'Critical',status:'Final',collected:'10 Sep, 09:41',reported:'10 Sep, 10:02',lab:'Biochemistry',action:'Replace potassium and repeat'}
];

export const RADIOLOGY_STUDIES = [
  {id:'r1',patientId:'p2',study:'MRI lumbar spine',modality:'MRI',region:'Lumbar spine',ordered:'09 Sep, 15:20',performed:'09 Sep, 18:42',status:'Final report',flag:'Significant',radiologist:'Dr. Demo Radiologist',impression:'Grade I L4–L5 spondylolisthesis with severe central canal and bilateral lateral recess stenosis. Correlate clinically for operative planning.'},
  {id:'r2',patientId:'p2',study:'Chest X-ray PA',modality:'X-ray',region:'Chest',ordered:'10 Sep, 08:05',performed:'10 Sep, 08:48',status:'Final report',flag:'Normal',radiologist:'Dr. Demo Radiologist',impression:'No focal pulmonary opacity or pleural effusion. Cardiomediastinal silhouette is within expected limits.'},
  {id:'r3',patientId:'p3',study:'MRI cervical spine',modality:'MRI',region:'Cervical spine',ordered:'09 Sep, 11:10',performed:'09 Sep, 14:22',status:'Final report',flag:'Critical',radiologist:'Dr. Demo Radiologist',impression:'Severe C4–C6 canal stenosis with cord compression and intramedullary signal alteration consistent with compressive myelopathy.'},
  {id:'r4',patientId:'p4',study:'Chest X-ray PA',modality:'X-ray',region:'Chest',ordered:'10 Sep, 07:30',performed:'10 Sep, 08:20',status:'Final report',flag:'Significant',radiologist:'Dr. Demo Radiologist',impression:'Hyperinflated lung fields. No acute consolidation. Findings are compatible with the documented COPD history.'},
  {id:'r5',patientId:'p6',study:'Portable chest X-ray',modality:'X-ray',region:'Chest',ordered:'10 Sep, 09:55',performed:'10 Sep, 10:18',status:'Reporting',flag:'Pending',radiologist:'Assigned',impression:'Report pending.'}
];

export const initialStore = {
  assessments:{}, acknowledgements:{}, optimization:[
    {id:'o1', patientId:'p2', task:'Four-hourly capillary glucose and insulin correction', owner:'IPD Nursing', priority:'High', due:'Today 12:30', status:'In progress'},
    {id:'o2', patientId:'p3', task:'Cardiology opinion on abnormal ECG', owner:'Cardiology', priority:'Urgent', due:'Overdue 42 min', status:'Pending'},
    {id:'o3', patientId:'p6', task:'IV potassium correction and repeat electrolyte panel', owner:'HDU Nursing', priority:'Urgent', due:'Today 11:30', status:'In progress'}
  ],
  fitness:{ p1:{decision:'Fit for Proposed Surgery',validity:'14 Sep 2026'}, p4:{decision:'Fit with Conditions',validity:'13 Sep 2026',conditions:'Postoperative HDU monitoring, bronchodilator nebulization and SpO₂ target 92–96%'} },
  orders:[], labOrders:[], radiologyOrders:[], labReviews:{}, radiologyReviews:{}, notes:[], handovers:[
    {id:'h1',patientId:'p3',issue:'Abnormal ECG with cardiac risk',risk:'Critical',pending:'Cardiology opinion',review:'Within 30 minutes',assigned:'Dr. Demo Consultant',ack:false},
    {id:'h2',patientId:'p6',issue:'Postoperative hypokalaemia',risk:'High',pending:'Repeat K+ after correction',review:'At 11:30',assigned:'Dr. Demo Resident One',ack:false}
  ],
  audit:[{id:'a1',patientId:'p3',actor:'Laboratory',action:'ECG result posted',time:'10 Sep 2026, 10:12',detail:'Abnormal result flagged critical'}]
};
