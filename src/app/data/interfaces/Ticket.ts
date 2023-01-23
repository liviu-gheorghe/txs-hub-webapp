export interface Ticket {
  id?: string,
  ticketPrice: number,
  ticketDetails?: string,
  ticketCategory?: string,
  customerId: string,
  eventId: string,
  purchaseDateTime: string,
  dateCreated?: string,
  dateModified?: string
}
