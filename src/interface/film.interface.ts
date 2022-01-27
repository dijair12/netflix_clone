export default interface IFilm {
  title: string,
  type: string,
  cape: string,
  figure: string,
  thumb: string,
  description: string,
  gender: Array<string | number>,
  cast: Array<string>,
  scenes: Array<string>,
}