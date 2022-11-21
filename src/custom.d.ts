type Type = '-' | '+'

type RecordItem = {
  tagID:number,
  note:string,
  type:Type,
  amount: number,
  createdAt:string
}
type NewRecordItem = Omit<RecordItem, 'createdAt'>
