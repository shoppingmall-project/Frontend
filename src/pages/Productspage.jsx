import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage() {
  axios
    .get(
      "http://ec2-3-34-90-87.ap-northeast-2.compute.amazonaws.com:8080/goods"
    )
    .then((res) => console.log(res.data.data));
  return (
    <div className="page">
      <h1>Products Page</h1>
    </div>
  );
}

export default ProductsPage;
