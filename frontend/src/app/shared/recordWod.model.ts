export interface RecordWod{
  _id: String,
  idUser: String,
  idWod: String,
  name: String,
  record: Number,
  state: String, //public or private
  date: Date
}
