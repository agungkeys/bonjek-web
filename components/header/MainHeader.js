import Navbar from "./Navbar";
export default function MainHeader(props) {
  const {isCart, q, filter, queryParams} = props;
  return (
    <Navbar 
      isCart={isCart} 
      q={q} 
      filter={filter} 
      queryParams={queryParams} 
    />
  )
}
