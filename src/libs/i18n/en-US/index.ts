import tee from './tee';
import bi from './bi';
import mka from './mka';
import segment from './segment';
import component from './component';
import communication from './communication';
import authentication from './authentication';

// for default language, no need to reference the type (because it will act as base type, and key/type will auto inferred)

export default {
  date_picker: {
    relative: {
      // -- duration
      day: '{days} Day | {days} Days',
      month: '{months} Month | {months} Months',
      year: '{years} Year | {years} Years',
      // --- relative
      today: 'Today',
      // --- custom
      custom: 'Custom',
    },
  },

  auth: {
    btn_login: 'login',
    username: 'username',
    email_required: 'email is required',
    username_required: 'username is required',
    username_invalid: 'username is invalid',
    password: 'password',
    password_required: 'password is required',
    password_invalid: 'password is invalid',
  },

  main_menu: {
    dashboard: 'Dashboard',
    segment: 'Segments',
    data_connector: 'Data Connector',
    data_cconnector_overview: 'Source & Desctination',
    data_connector_coupon: 'Coupon',
    data_connector_history: 'History',
    communication: 'Communication',
    automation: 'Automations',
    setting: 'Setting',
  },

  menu_bar: {
    edit_profile: 'Edit Profile',
    brand_account: 'Brand Account',
    change_brand_account: 'Change Brand Account',
    permission: 'Permission',
    change_role: 'Change Role',
    manage_storage: 'Manage Storage',
    configuration: 'Configuration',
    sign_out: 'Sign Out',
  },

  change_brand_modal: {
    error: 'Something went wrong',
    error_description: 'Brand cannot be selected at this time',
    change_brand_account: 'Change Brand Account',
    select_brand_account: 'Select Brand Account',
    cancel: 'Cancel',
    change: 'Change',
  },

  bi,

  data_connector: {
    // Tab
    tab_data_connector: 'Data Connector',
    tab_data_source_list: 'Data Source List',
    tab_add_datasource: 'Add Data Source',
    tab_excel_datasource: 'Excel Data Source',
    tab_file_history: 'Excel File History',
    // Page overview
    overview_title: '',
    overview_btn_connect_datasource: 'Data Source',
    overview_data_connector_detail: 'You can now connect the data sources you want to send data to.',
    overview_btn_connect_commu: 'Destination',
    overview_commu_detail: 'Now you can connect the Destinations your want to send data to.',
    // Page file history
    file_history_column_no: 'No.',
    file_history_column_ref_code: 'Ref.Code',
    file_history_column_type: 'Template Type',
    file_history_column_name: 'Name',
    file_history_column_amount: 'Upload File',
    file_history_column_last_update: 'Last Update',
    file_history_column_status: 'Status',
    // Page datasource
    datasource_header: 'Add Data Source',
    datasource_search_text: 'search',
    // Page dataset
    dataset_btn_create_template: 'Create',
    // Page create template
    // Page update file
    upload_file_progress_upload: 'Upload File',
    upload_file_progress_confirm_data: 'Confirm Data',
    upload_title_download_template: 'Download Template',
    upload_btn_download_template: 'Download Template',
    upload_btn_browse_file: 'Browse File',
    upload_backup_file: 'Backup file',
    // Page summary upload
    summary_upload_column_status: 'Status',
    summary_upload_column_quantity: 'Quantity',
    summary_upload_column_row_success: 'Success',
    summary_upload_column_row_error: 'Error',
    summary_upload_column_row_total: 'All',
    // Page coupon managements
    tab_coupon_management: 'Coupon',
    tab_coupon_detail: 'Detail',
    upload_coupon_button: 'Upload Coupon',
    edit_coupon_button: 'Edit Detail',
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
