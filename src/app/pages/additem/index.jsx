import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import Link from "@/app/widgets/design/Link";
import Header from "@/app/widgets/design/Header";
import Column from "@/app/widgets/layout/Column";
import Row from "@/app/widgets/layout/Row";
import Button from "@/app/widgets/design/Button";

import plus_svg from "@/assets/icons/plus.svg";
import close_svg from "@/assets/icons/close.svg";

export default function AddItemPage({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	const refImageInput = React.useRef();
	const refNameInput = React.useRef();
	const refDesInput = React.useRef();
	const refPriceInput = React.useRef();

	const [isValid, setIsValid] = React.useState(false);
	const [tags, setTags] = React.useState([]);
	const [postImgs, setPostImgs] = React.useState([]);
	const [previewImgs, setPreviewImgs] = React.useState([]);

	/** @see https://stackoverflow.com/a/32858056 */
	function upload(event)
	{
		const file = event.target.files[0];

		setPostImgs((postImgs) => [...postImgs, file]);

		const reader = new FileReader();

		reader.addEventListener("load", (event) =>
		{
			setPreviewImgs((previewImgs) => [...previewImgs, reader.result]);
		});

		reader.readAsDataURL(file);
	}

	function unload(index)
	{
		setPostImgs((postImgs) => postImgs.toSpliced(index, 1));
		setPreviewImgs((previewImgs) => previewImgs.toSpliced(index, 1))
	}

	function addTag(event)
	{
		switch (event.key)
		{
			case "Enter": case "\u0020": case "\\": case ",":
			{
				const chip = event.target.value;

				if (chip.isNotEmpty)
				{
					setTags((tags) => [...tags, chip]);
					event.target.value = "";
					event.preventDefault();
				}
				break;
			}
		}
	}

	function onChange(event)
	{
		for (const ref of [refNameInput, refDesInput, refPriceInput])
		{
			if (ref.current.value.isEmpty)
			{
				return setIsValid((valid) => false);
			}
		}
		return setIsValid((valid) => true);
	}

	return (
		<section {...widget(AddItemPage.name, { id, style, classes })}>
			<Header avatar={true}>
				<Link href="/posts">
					자유게시판
				</Link>
				<Link href="/items" style={{ "color": "var(--blue)" }}>
					중고마켓
				</Link>
			</Header>
			<main>
				<form>
					<Row arrange="space-between">
						<h1 class="title">
							상품 등록하기
						</h1>
						<Button disabled={!isValid}>
							등록
						</Button>
					</Row>
					<Column gap={24} align="stretch">
						<Column gap={12} align="flex-start">
							<label for="image">
								상품 이미지
							</label>
							<div class="grid">
								<label for="image">
									<Column gap={12}>
										<img src={plus_svg}/>
										이미지 등록
										<input ref={refImageInput} id="image" style={{ "display": "none" }} type="file" accept=".png,.jpg,.jpeg,.webp" multiple={false} onChange={upload}/>
									</Column>
								</label>
								{previewImgs.map((src, index, array) =>
								{
									return (
										<div key={index} class="wrapper">
											<div class="preview" style={{ backgroundImage: `url("${src}")` }}></div>
											<img class="button" src={close_svg} onClick={(event) => unload(index)}/>
										</div>
									);
								})}
							</div>
						</Column>
						<Column gap={12} align="flex-start">
							<label for="name">
								상품명
							</label>
							<input ref={refNameInput} id="name" placeholder="상품명을 입력해 주세요" onChange={onChange}/>
						</Column>
						<Column gap={12} align="flex-start">
							<label for="description">
								상품 소개
							</label>
							<textarea ref={refDesInput} id="description" placeholder="상품 소개를 입력해 주세요" onChange={onChange}/>
						</Column>
						<Column gap={12} align="flex-start">
							<label for="price">
								판매 가격
							</label>
							<input ref={refPriceInput} id="price" placeholder="판매 가격을 입력해 주세요" onChange={onChange}/>
						</Column>
						<Column gap={12} align="flex-start">
							<label for="tags">
								태그
							</label>
							<input id="tags" placeholder="태그를 입력해 주세요" onKeyDown={addTag}/>
							<div class="snacks">
								{tags.map((tag, index, array) =>
								{
									return (
										<div key={index} class="chip">
											{tag}
											<img class="button" src={close_svg} onClick={(event) => setTags((tags) => tags.toSpliced(index, 1))}/>
										</div>
									);
								})}
							</div>
						</Column>
					</Column>
				</form>
			</main>
		</section>
	);
}
