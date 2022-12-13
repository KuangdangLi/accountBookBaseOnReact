type Type = '-' | '+'

type RecordItem = {
  tagID:number,
  note:string,
  type:Type,
  amount: number,
  createdAt:string
}
type NewRecordItem = Omit<RecordItem, 'createdAt'>

type ChartOption = {
  dateArr:string[]
  amountArr:number[]
  pieChartOption:PieChartOption[]
}

type IdAndAmount={
  [id:number]:number
}

type PieChartOption = {
  value:number,
  name:string,
  itemStyle:object
}

type Tag = {ID:number,name:string,type:Type}
