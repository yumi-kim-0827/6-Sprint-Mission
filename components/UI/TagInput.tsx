import { KeyboardEvent, useState } from "react";
import InputItem from "./InputItem";
import DeleteButton from "./DeleteButton";
import style from "./TagInput.module.scss";

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export default function TagInput({
  tags,
  onAddTag,
  onRemoveTag,
}: TagInputProps) {
  const [input, setInput] = useState("");

  const onPressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    const inputString = input.trim();
    if (event.key === "Enter" && inputString) {
      event.preventDefault();
      onAddTag(inputString);
      setInput("");
    }
  };

  return (
    <div>
      <InputItem
        id="tags"
        label="태그"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder="태그를 입력해 주세요"
      />

      {tags.length > 0 && (
        <div className={style.tag_buttons_section}>
          {tags.map((tag) => (
            <div className={style.tag} key={`tag-${tag}`}>
              <span className={style.tag_name}>{tag}</span>

              <DeleteButton
                onClick={() => onRemoveTag(tag)}
                label={`${tag} 태그`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
