export class CustomServiceRefund {
  /**
   * Database Column Remarks:
   *   主键
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.id
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    id: number;

  /**
   * Database Column Remarks:
   *   订单ID
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.order_id
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    orderId: string;

  /**
   * Database Column Remarks:
   *   退款理由
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.refun_reason
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    refunReason: string;

  /**
   * Database Column Remarks:
   *   操作
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.operation
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    operation: string;

  /**
   * Database Column Remarks:
   *   用户id
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.user_id
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    userId: number;

  /**
   * Database Column Remarks:
   *   申请退款时间
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.creationDate
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    creationdate: Date;

  /**
   * Database Column Remarks:
   *   最后操作时间
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.lastupdateDate
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    lastupdatedate: Date;

  /**
   * Database Column Remarks:
   *   操作退款人员
   *
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database column custom_service_refund.operationName
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
    operationname: string;

  /**
   * This field was generated by MyBatis Generator.
   * This field corresponds to the database table custom_service_refund
   *
   * @mbg.generated Tue Jun 12 16:44:14 CST 2018
   */
}
