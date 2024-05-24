import { } from "react"; import "./index.scss";

import Row from "@/app/widgets/Row";
import Column from "@/app/widgets/Column";

export default function Item(props: { data: { images: [string]; name: string; price: number; favoriteCount: number; }; })
{
	return (
		<Column class="item">
			<div class="image" style={{ background: `url("${props.data.images[0]}") center center / cover no-repeat` }}>
			{
				/* TODO: idk */
			}	
			</div>
			<div class="title">
			{
				props.data.name
			}
			</div>
			<div class="price">
			{
				`${props.data.price.format(",")}원`
			}
			</div>
			<Row class="likes">
			{
				props.data.favoriteCount
			}
			</Row>
		</Column>
	);
}
