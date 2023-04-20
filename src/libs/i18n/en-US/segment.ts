export default {
  all_customer: {
    tabs: {
      customer: 'All Customer',
      product: 'All Product',
      transaction: 'All Transaction',
    },

    button: {
      create_segment: 'Create Segment',
      duplicate: 'Duplicate',
      export: 'Export',
    },
    table: {
      countdata_before: 'All',
      countdata_after: 'segments on this page are selected.',
      clear_select: ' Clear selection',
      segments_inbox_before: 'Select all ',
      segments_inbox_after: ' segments in Inbox.',
    },
  },

  all_folder: {
    tabs: 'All Folder',

    button: {
      action: 'Manage',
      create_folder: 'Folder',
      create_segment: 'Create Segment',
    },

    table: {
      folder_name: 'Folder Name',
      total_segment: 'Total Segment',
      update_by: 'Update By',
      last_update: 'Last Update',
    },

    action: {
      edit: 'Edit',
      delete: 'Delete',
      copy: 'Duplicate',
      tooltip: 'Detail List',
    },

    popup: {
      delete_success: 'Delete Success',
    },

    modal: {
      create_folder: {
        header: 'Create Folder',
        folder_name: 'Folder name',
        placeholder: 'specify',
      },

      delete_confirm: {
        topic: 'Delete Folder?',
        description_first: 'กลุ่มลูกค้าที่สร้างทั้งหมดจะถูกลบออกจาก',
        description_second: 'โฟลเดอร์นี้ด้วย ต้องการลบใช่หรือไม่?',
      },

      button: {
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
      },
    },
  },

  all_segment: {
    tabs: 'All Segment',
    topic_edit_modal: 'แก้ไขโฟลเดอร์',
    label_edit_modal: 'Folder Name',
    placeholder_edit_modal: 'ระบุ..',

    button: {
      action: 'Manage',
      create_segment: 'Create Segment',
      edit: 'Edit',
      cancel: 'Cancel',
    },

    table: {
      segment_name: 'Segment Name',
      folder: 'Folder',
      segment_size: 'Segment size',
      campaign: 'Campaign',
      update_by: 'Update By',
      fast_update: 'Last Update',
      segment_type: 'Segment Type',
    },

    action: {
      edit: 'Edit',
      duplicate: 'Duplicate',
      delete: 'Delete',
    },

    popup: {
      delete_success: 'ลบโฟลเดอร์สำเร็จ',
    },
  },

  all_data: {
    tabs: 'All Data',
  },

  detail_segment: {
    last_update: 'Last Update',
    minutes_ago: 'minutes ago',
    seconds_ago: 'seconds ago',
    table: {
      statusbar_total_record_all: 'All',
      statusbar_total_record_selected: 'segments on this page are selected.',
      statusbar_total_record_button_all: 'Select all ',
      statusbar_total_record_button_inbox: ' segments in Inbox',
      statusbar_total_record_button_clear: 'Clear selection',
    },
    modal: {
      edit_segment_title: 'แก้ไขกลุ่มเป้าหมาย',
      edit_segment_name: 'Segment Name',
      segment_delete: {
        segment_order_all: 'ลบรายการทั้งหมด',
        segment_order: 'รายการ',
        segment_description: 'ต้องการลบรายการใช่หรือไม่?',
      },
      segment_replace: {
        segment_content_first: 'ชื่อกลุ่มลูกค้า ',
        segment_content_last: ' มีอยู่แล้ว',
        segment_description: 'กรุณาตั้งชื่อกลุ่มใหม่อีกครั้ง',
      },
    },
    button: {
      edit_segment: 'Edit Segment',
      edit_name: 'Edit Name',
      edit: 'Edit',
      delete: 'Delete',
      cancel: 'Cancel',
      duplicate: 'Duplicate',
      export: 'Export',
    },
  },

  preview_segment: {
    title: 'แสดงตัวอย่างข้อมูล',
    folder: 'Folder',
    table: {
      statusbar_total_record_all: 'All',
      statusbar_total_record_selected: 'segments on this page are selected.',
      statusbar_total_record_button_all: 'Select all ',
      statusbar_total_record_button_inbox: ' segments in Inbox',
      statusbar_total_record_button_clear: 'Clear selection',
    },
    modal: {
      topic_create_segment_name: 'สร้างชื่อกลุ่มเป้าหมาย',
      label_segment_name: 'Segment Name',
      reate_segment_placeholder: 'ระบุ...',
    },
    button: {
      edit_rule: 'Edit Rule',
      save: 'Save',
      confirm: 'Confirm',
      cancel: 'Cancel',
      edit_name: 'Edit Name',
      export_report: 'Export',
    },
  },

  components: {
    create_segment_modal: {
      set_conditions: 'กำหนดเงื่อนไข',
      logic: 'Logic',
      no_matching_options: 'Sorry, no matching options.',

      operator: {
        title: 'Operator',
        and: 'And',
        or: 'Or',
        advance: 'Advance',
      },

      button: {
        add_rule_set: 'Add rule set',
        filter_by_segment: 'Filter by segment',
        cancel: 'Cancel',
        apply: 'Apply',
        create_group: 'Create Group',
        ungroup_all: 'Ungroup All',
      },

      ruleset_card: {
        rule_name: 'Rule name',
        set_conditions: 'กำหนดเงื่อนไข',
        logic: 'Logic',
        group_by: 'Group by',

        operator: {
          title: 'Operator',
          and: 'And',
          or: 'Or',
        },

        button: {
          add_rule: 'Add rule',
          function_aggregate: 'Function Aggregate',
          add_function: 'Add Function',
        },
      },

      notification: {
        button: {
          cancel: 'Cancel',
          confirm: 'Confirm',
          close: 'Close',
        },
      },

      filter_by_segment: {
        rule_name: 'Rule name',
        include: 'Include',
        exclude: 'Exclude',
        select_view: '- Select View -',
        select_segment: '- Select Segment -',
      },
    },

    view_mode: {
      placeholder: '-- Place Selected --',
      no_item: 'No Item',
      customer: 'Customer',
      product: 'Product',
      transaction: 'Transaction',
      group_by: 'Group By',
      tooltip: 'View mode',
    },

    save_custom_dialog: {
      title: 'แก้ไขกลุ่มลูกค้า',
      view_data: 'View Data',

      table: {
        countdata_before: 'All',
        countdata_after: 'segments on this page are selected.',
        clear_select: ' Clear selection',
        segments_inbox_before: 'Select all ',
        segments_inbox_after: ' segments in Inbox.',
      },

      all_customer: {
        tabs: {
          customer: 'All Customer',
          product: 'All Product',
          transaction: 'All Transaction',
        },

        btn: {
          create_segment: 'Create Segment',
        },
      },

      all_folder: {
        tabs: 'All Folder',

        dropdown: {
          folder: 'Folder',
          segment: 'Segment',
        },
      },

      all_segment: {
        tabs: 'All Segment',

        dropdown: {
          segment: 'Segment',
        },
      },

      all_data: {
        tabs: 'All Data',
      },

      button: {
        cancel: 'Cancel',
        add: 'Add',
      },

      modal_next_tab: {
        title_first: 'หากเปลี่ยนแปลงแถบแสดงข้อมูลแล้ว',

        title_second: 'รายการที่เลือกก่อนหน้า จะไม่ถูกรวม',

        description: 'ต้องการดำเนินการต่อใช่ หรือไม่?',

        button: {
          cancel: 'Cancel',
          next: 'Next',
        },
      },

      modal_save_modal: {
        title_before: 'บันทึกทั้งหมด ',

        title_after: ' รายการ',

        description: 'ต้องการบันทึกใช่ หรือไม่?',

        button: {
          cancel: 'Cancel',
          confirm: 'Confirm',
        },
      },

      modal_success: {
        title: 'บันทึกรายการสำเร็จ',
      },
    },

    breadcrumb: {
      folder: 'Folder',
    },

    dialog_segment: {
      segment_name: 'Segment name',
      search: 'Search',
      title_folder: 'กรุณาเลือกโฟลเดอร์',
      view_data: 'view data',

      table: {
        segment_name: 'Segment Name',
        segment_type: 'Segment Type',
        no_item: 'No Items',
      },

      modal: {
        topic_create_folder: 'สร้างโฟลเดอร์',
        create_folder_placeholder: 'ตั้งชื่อโฟลเดอร์',
      },

      button: {
        create_folder: 'Folder',
        save: 'Save',
        cancel: 'Cancel',
      },
    },
  },
};
