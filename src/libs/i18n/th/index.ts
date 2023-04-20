import { AppTranslation } from '@/libs/i18n/interface';

import tee from './tee';
import bi from './bi';
import mka from './mka';
import segment from './segment';
import component from './component';
import communication from './communication';
import authentication from './authentication';

// for another available language, we will provide type for key auto-completion and type checking
// (and it will skip key that not defined, act as optional and will fallback to default language, as config in boot/i18n)
export default <AppTranslation>{
  auth: {
    btn_login: 'เข้าสู่ระบบ',
    username: 'บัญชีผู้ใช้',
    email_required: 'กรุณาใส่อีเมล',
    username_required: 'กรุณาใส่บัญชีผู้ใช้',
    username_invalid: 'บัญชีผู้ใช้ผิด',
    password: 'รหัสผ่าน',
    password_required: 'กรุณาใส่รหัสผ่าน',
    password_invalid: 'รหัสผ่านผิด',
  },

  main_menu: {
    dashboard: 'แดชบอร์ด',
    segment: 'สร้างกลุ่มเป้าหมาย',
    data_connector: 'ตัวเชื่อมต่อข้อมูล',
    data_cconnector_overview: 'แหล่งข้อมูล',
    data_connector_coupon: 'คูปอง',
    data_connector_history: 'ประวัติ',
    communication: 'การสื่อสาร',
    automation: 'การตลาดอัตโนมัติ',
    setting: 'การตั้งค่า',
  },

  menu_bar: {
    edit_profile: 'ตั้งค่าโปรไฟล์',
    brand_account: 'บัญชี',
    change_brand_account: 'เปลี่ยนแบรนด์',
    permission: 'การอนุญาต',
    change_role: 'เปลี่ยนบทบาท',
    manage_storage: 'จัดการที่เก็บข้อมูล',
    configuration: 'กำหนดค่า',
    sign_out: 'ออกจากระบบ',
  },

  change_brand_modal: {
    error: 'เกิดข้อผิดพลาด',
    error_description: 'ไม่สามารถเลือก Brand ได้ในขณะนี้',
    change_brand_account: 'เปลี่ยนแบรนด์',
    select_brand_account: 'เลือกแบรนด์',
    cancel: 'ยกเลิก',
    change: 'เปลี่ยน',
  },

  bi,

  data_connector: {
    tab_data_connector: 'ตัวเชื่อมข้อมูล',
    tab_data_source_list: 'เชื่อมต่อข้อมูล',
    tab_add_datasource: 'เพิ่มแหล่งข้อมูล',
    tab_excel_datasource: 'แหล่งข้อมูล Excel/CSV',
    tab_file_history: 'ประวัติการอัพโหลดข้อมูล',
    // Page overview
    overview_title: 'ฟังก์ชั่นจัดการเครื่องมือสำหรับนำเข้าและส่งออกข้อมูล เพื่อเพิ่มขีดความสามารถของระบบ CDP',
    overview_btn_connect_datasource: 'เชื่อมข้อมูล',
    overview_data_connector_detail: 'ตอนนี้คุณสามารถเชื่อมต่อปลายทางที่คุณต้องการส่งข้อมูลไป',
    overview_btn_connect_commu: 'เชื่อมต่อการสื่อสาร',
    overview_commu_detail: 'เพิ่มปลายทางที่คุณต้องการส่งออกข้อมูลหรือเผยแพร่แคมเปญที่นี่',
    // Page file history
    file_history_column_no: 'ลำดับ',
    file_history_column_ref_code: 'รหัสอ้างอิง',
    file_history_column_type: 'ประเภท',
    file_history_column_name: 'ชื่อ',
    file_history_column_amount: 'Upload File',
    file_history_column_last_update: 'แก้ไขล่าสุด',
    file_history_column_status: 'สถานะ',
    // Page datasource
    datasource_header: 'เพิ่มแหล่งข้อมูล',
    datasource_search_text: 'ค้นหา',
    // Page dataset
    dataset_btn_create_template: 'สร้าง',
    // Page create template
    // Page update file
    upload_file_progress_upload: 'อัปโหลด',
    upload_file_progress_confirm_data: 'ยืนยันข้อมูล',
    upload_title_download_template: 'ดาวน์โหลดเทมเพลต',
    upload_btn_download_template: 'ดาวน์โหลด',
    upload_btn_browse_file: 'อัปโหลดไฟล์',
    upload_backup_file: 'สำรองไฟล์',
    // Page summary upload
    summary_upload_column_status: 'สถานะ',
    summary_upload_column_quantity: 'จำนวน',
    summary_upload_column_row_success: 'สำเร็จ',
    summary_upload_column_row_error: 'เกิดข้อผิดพลาด',
    summary_upload_column_row_total: 'รวม',
    // Page coupon managements
    tab_coupon_management: 'คูปอง',
    tab_coupon_detail: 'รายละเอียด',
    upload_coupon_button: 'Upload Coupon',
    edit_coupon_button: 'แก้ไขรายละเอียด',
    status_coupon_text: 'Status',
    // Table coupon
    couponId: 'couponId',
    image: 'Image',
    campaignName: 'Campaign Name',
    balanceandtotal: 'Balance/Total',
    balance: 'Balance',
    total: 'Total',
    reference: 'Reference',
    lastUpload: 'Last Upload',
    updateBy: 'Update by',
    status: 'Status',
    lastUpdate: 'Last Update',
    action_edit: 'action_edit',
  },

  component: component,
  segment: segment,
  tee: tee,
  mka: mka,
  communication: communication,
  authentication: authentication,
};
