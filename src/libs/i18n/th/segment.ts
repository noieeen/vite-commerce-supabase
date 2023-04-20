export default {
  all_customer: {
    tabs: {
      customer: 'รายชื่อลูกค้า',
      product: 'สินค้าทั้งหมด',
      transaction: 'ธุรกรรมทั้งหมด',
    },

    button: {
      create_segment: 'สร้างกลุ่มเป้าหมาย',
      duplicate: 'ทำซ้ำ',
      export: 'ดึงรีพอร์ต',
    },
    table: {
      countdata_before: 'ข้อมูลทั้งหมด',
      countdata_after: 'ข้อมูล จากเงื่อนไขที่กำหนดกำลังถูกเลือก',
      clear_select: ' ล้างข้อมูลที่เลือก',
      segments_inbox_before: 'เลือกข้อมูลทั้งหมด ',
      segments_inbox_after: ' ข้อมูล',
    },
  },

  all_folder: {
    tabs: 'โฟลเดอร์',

    button: {
      action: 'จัดการ',
      create_folder: 'โฟลเดอร์',
      create_segment: 'เพิ่มการจัดกลุ่ม',
    },

    table: {
      folder_name: 'ชื่อโฟลเดอร์',
      total_segment: 'จำนวนกลุ่มเป้าหมาย',
      update_by: 'อัปเดตโดย',
      last_update: 'อัปเดตล่าสุด',
    },

    action: {
      edit: 'แก้ไข',
      delete: 'ลบ',
      copy: 'คัดลอก',
      tooltip: 'จัดการ',
    },

    popup: {
      delete_success: 'ลบโฟลเดอร์สำเร็จ',
    },

    modal: {
      create_folder: {
        header: 'สร้างโฟลเดอร์',
        folder_name: 'ชื่อโฟลเดอร์',
        placeholder: 'โปรดระบุ',
      },

      delete_confirm: {
        topic: 'ลบโฟลเดอร์',
        description_first: 'กลุ่มลูกค้าที่สร้างทั้งหมดจะถูกลบออกจาก',
        description_second: 'โฟลเดอร์นี้ด้วย ต้องการลบใช่หรือไม่?',
      },

      button: {
        cancel: 'ยกเลิก',
        save: 'บันทึก',
        delete: 'ลบ',
      },
    },
  },

  all_segment: {
    tabs: 'การจัดกลุ่มทั้งหมด',
    topic_edit_modal: 'แก้ไขโฟลเดอร์',
    label_edit_modal: 'ชื่อโฟลเดอร์',
    placeholder_edit_modal: 'ระบุ..',

    button: {
      action: 'จัดการ',
      create_segment: 'เพิ่มการจัดกลุ่ม',
      edit: 'แก้ไข',
      cancel: 'ยกเลิก',
    },

    table: {
      segment_name: 'ชื่อกลุ่ม',
      folder: 'โฟลเดอร์',
      segment_size: 'จำนวนข้อมูล',
      campaign: 'แคมเปญ',
      update_by: 'อัปเดตโดย',
      fast_update: 'อัปเดตล่าสุด',
      segment_type: 'รูปแบบการเชื่อมต่อ',
    },

    action: {
      edit: 'แก้ไข',
      duplicate: 'ทำซ้ำ',
      delete: 'ลบ',
    },

    popup: {
      delete_success: 'ลบโฟลเดอร์สำเร็จ',
    },
  },

  all_data: {
    tabs: 'ข้อมูลทั้งหมด',
  },

  detail_segment: {
    last_update: 'อัปเดตล่าสุด',
    minutes_ago: 'นาทีที่แล้ว',
    seconds_ago: 'วินาทีที่แล้ว',
    table: {
      statusbar_total_record_all: 'ทั้งหมด',
      statusbar_total_record_selected: 'ข้อมูล จากเงื่อนไขที่กำหนดกำลังถูกเลือก',
      statusbar_total_record_button_all: 'เลือกข้อมูลทั้งหมด ',
      statusbar_total_record_button_inbox: ' ข้อมูล',
      statusbar_total_record_button_clear: 'ล้างข้อมูลที่เลือก',
    },
    modal: {
      edit_segment_title: 'แก้ไขกลุ่มเป้าหมาย',
      edit_segment_name: 'ชื่อกลุ่มเป้าหมาย',
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
      edit_segment: 'แก้ไขกลุ่มเป้าหมาย',
      edit_name: 'Edit Name',
      edit: 'แก้ไข',
      delete: 'ลบ',
      cancel: 'ยกเลิก',
      duplicate: 'ทำซ้ำ',
      export: 'ดึงรีพอร์ต',
    },
  },

  preview_segment: {
    title: 'แสดงตัวอย่างข้อมูล',
    folder: 'โฟลเดอร์',
    table: {
      statusbar_total_record_all: 'ทั้งหมด',
      statusbar_total_record_selected: 'ข้อมูล จากเงื่อนไขที่กำหนดกำลังถูกเลือก',
      statusbar_total_record_button_all: 'เลือกข้อมูลทั้งหมด ',
      statusbar_total_record_button_inbox: ' ข้อมูล',
      statusbar_total_record_button_clear: 'ล้างข้อมูลที่เลือก',
    },
    modal: {
      topic_create_segment_name: 'สร้างชื่อกลุ่มเป้าหมาย',
      label_segment_name: 'ชื่อกลุ่มเป้าหมาย',
      reate_segment_placeholder: 'ระบุ...',
    },
    button: {
      edit_rule: 'แก้ไขเงื่อนไข',
      save: 'บันทึก',
      confirm: 'ยืนยัน',
      cancel: 'ยกเลิก',
      edit_name: 'แก้ไขชื่อ',
      export_report: 'ดึงรีพอร์ต',
    },
  },

  components: {
    create_segment_modal: {
      set_conditions: 'กำหนดเงื่อนไข',
      logic: 'สมการ',
      no_matching_options: 'ไม่พบข้อมูล',

      operator: {
        title: 'เงื่อนไข',
        and: 'และ',
        or: 'หรือ',
        advance: 'ขั้นสูง',
      },

      button: {
        add_rule_set: 'สร้างชุดเงื่อนไข',
        filter_by_segment: 'กรองกลุ่มเป้าหมาย',
        cancel: 'ยกเลิก',
        apply: 'ใช้งาน',
        create_group: 'จัดกลุ่ม',
        ungroup_all: 'ยกเลิกการจัดกลุ่ม',
      },

      ruleset_card: {
        rule_name: 'ชื่อเงื่อนไข',
        set_conditions: 'กำหนดเงื่อนไข',
        logic: 'สมการ',
        group_by: 'Group by',

        operator: {
          title: 'เงื่อนไข',
          and: 'และ',
          or: 'หรือ',
        },

        button: {
          add_rule: 'เพิ่มเงื่อนไข',
          function_aggregate: 'ฟังก์ชัน Aggregate',
          add_function: 'เพิ่มข้อกำหนด',
        },
      },

      notification: {
        button: {
          cancel: 'ยกเลิก',
          confirm: 'ยืนยัน',
          close: 'ปิด',
        },
      },

      filter_by_segment: {
        rule_name: 'ชื่อกฎ',
        include: 'รวม',
        exclude: 'ไม่รวม',
        select_view: '- เลือกดู -',
        select_segment: '- เลือกกลุ่ม -',
      },
    },

    view_mode: {
      placeholder: '-- โปรดเลือก --',
      no_item: 'ไม่พบข้อมูล',
      customer: 'ลูกค้า',
      product: 'สินค้า',
      transaction: 'ธุรกรรม',
      group_by: 'ผลลัพธ์ทั้งหมด',
      tooltip: 'เลือกมุมมอง',
    },

    save_custom_dialog: {
      title: 'แก้ไขกลุ่มลูกค้า',
      view_data: 'ข้อมูล',

      table: {
        countdata_before: 'ข้อมูลทั้งหมด',
        countdata_after: 'ข้อมูล จากเงื่อนไขที่กำหนดกำลังถูกเลือก',
        clear_select: ' ล้างข้อมูลที่เลือก',
        segments_inbox_before: 'เลือกข้อมูลทั้งหมด ',
        segments_inbox_after: ' ข้อมูล',
      },

      all_customer: {
        tabs: {
          customer: 'รายชื่อลูกค้า',
          product: 'สินค้าทั้งหมด',
          transaction: 'ธุรกรรมทั้งหมด',
        },

        btn: {
          create_segment: 'สร้างกลุ่มเป้าหมาย',
        },
      },

      all_folder: {
        tabs: 'โฟลเดอร์',

        dropdown: {
          folder: 'โฟลเดอร์',
          segment: 'กลุ่มเป้าหมาย',
        },
      },

      all_segment: {
        tabs: 'การจัดกลุ่มทั้งหมด',

        dropdown: {
          segment: 'กลุ่มเป้าหมาย',
        },
      },

      all_data: {
        tabs: 'ข้อมูลทั้งหมด',
      },

      button: {
        cancel: 'ยกเลิก',
        add: 'เพิ่ม',
      },

      modal_next_tab: {
        title_first: 'หากเปลี่ยนแปลงแถบแสดงข้อมูลแล้ว',

        title_second: 'รายการที่เลือกก่อนหน้า จะไม่ถูกรวม',

        description: 'ต้องการดำเนินการต่อใช่ หรือไม่?',

        button: {
          cancel: 'ยกเลิก',
          next: 'ถัดไป',
        },
      },

      modal_save_modal: {
        title_before: 'บันทึกทั้งหมด ',

        title_after: ' รายการ',

        description: 'ต้องการบันทึกใช่ หรือไม่?',

        button: {
          cancel: 'ยกเลิก',
          confirm: 'ตกลง',
        },
      },

      modal_success: {
        title: 'บันทึกรายการสำเร็จ',
      },
    },

    breadcrumb: {
      folder: 'โฟลเดอร์',
    },

    dialog_segment: {
      segment_name: 'ชื่อกลุ่มเป้าหมาย',
      search: 'ค้นหา',
      title_folder: 'กรุณาเลือกโฟลเดอร์',
      view_data: 'ข้อมูล',

      table: {
        segment_name: 'ชื่อกลุ่มเป้าหมาย',
        segment_type: 'ประเภทกลุ่มเป้าหมาย',
        no_item: 'ไม่พบข้อมูล',
      },

      modal: {
        topic_create_folder: 'สร้างโฟลเดอร์',
        create_folder_placeholder: 'ตั้งชื่อโฟลเดอร์',
      },

      button: {
        create_folder: 'สร้างโฟลเดอร์',
        save: 'บันทึก',
        cancel: 'ยกเลิก',
      },
    },
  },
};
