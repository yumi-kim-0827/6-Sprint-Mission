import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getProductDetail, getProductComment } from "../api/itemsApi";
import Logo from "../assets/logo.png";
import Like from "../assets/icons/ic_heart.png";
import More from "../assets/icons/ic_kebab.png";
import "../styles/ProductDetailPage.css";

interface ProductDetail {
  id: number;
  images: string[];
  name: string;
  price: number;
  description: string;
  tags: string[];
  favoriteCount: number;
}

export default function ProductDetailPage() {
  const navigate = useNavigate();
  // useParams 어케 쓰는 거더라?
  const { productId } = useParams();
  const [inputText, setInputText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [productDetail, setProductDetail] = useState<ProductDetail>({
    id: 0,
    images: [],
    name: "",
    price: 0,
    description: "",
    tags: [],
    favoriteCount: 0,
  }); // 빈 객체로 초기화

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputText(e.target.value);
  };

  const fetchData = async () => {
    const productDetail = await getProductDetail(productId);
    setProductDetail(productDetail);
  };

  useEffect(() => {
    if (inputText !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  },[inputText])

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="판다마켓 로고" />
          </Link>
          <span>자유게시판</span>
          <Link to="/items">
            <span>중고마켓</span>
          </Link>
        </nav>

        <button
          className="login_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </header>

      <div className="product_detail_wrapper">
        <div className="item_detail_section">
          <img src={productDetail.images[0]} alt={productDetail.name} />
          <div className="item_detail_info_wrapper">
            <div className="item_detail_main_info">
              <img src={More} alt="더보기 아이콘" />
              <div className="item_name">{productDetail.name}</div>
              <div className="item_pirce">
                {Number(productDetail.price).toLocaleString("ko-KR")}원
              </div>
            </div>

            <div className="item_introduce">상품소개</div>
            <div className="item_description">{productDetail.description}</div>
            <div className="item_tag">상품태그</div>
            <div className="item_tagList">
              <ul>
                {productDetail.tags?.map((tag) => {
                  return <li key={productDetail.id}>#{tag}</li>;
                })}
              </ul>
            </div>
            <div className="item_likeCount">
              <img src={Like} alt="좋아요아이콘" />
              {productDetail.favoriteCount}
            </div>
          </div>
        </div>

        <form action="" className="qustion_section">
          <label htmlFor="">문의하기</label>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <button disabled={isDisabled}>등록</button>
        </form>

        <div className="comment_section"></div>

        <button
          onClick={() => {
            navigate("/items");
          }}
        >
          {/* <img src="" alt="돌아가기 버튼" /> */}
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}
