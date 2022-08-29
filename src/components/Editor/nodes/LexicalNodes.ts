import type { Klass, LexicalNode } from "lexical";

import { HashtagNode } from "@lexical/hashtag";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { MarkNode } from "@lexical/mark";
import { OverflowNode } from "@lexical/overflow";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

import { EmojiNode } from "./EmojiNode";
import { KeywordNode } from "./KeywordNode";
import { MentionNode } from "./MentionNode";

const LexicalNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  HashtagNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
  MentionNode,
  EmojiNode,
  KeywordNode,
  MarkNode,
];

export default LexicalNodes;
