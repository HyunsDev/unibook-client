import { BlockCommentReactionObject } from "./blockCommentReaction.object";
import { UserObject } from "./user.object";

export class BlockCommentObject {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    isEdited: boolean;
    type: "comment" | "question";
    reactions: BlockCommentReactionObject[];
    user: UserObject;
    parent?: BlockCommentObject;
    children?: BlockCommentObject[];
    createdAt: string;
    updatedAt: string;

    constructor(data: {
        id: number;
        bookId: number;
        sectionId: number;
        blockId: string;
        content: string;
        isEdited: boolean;
        type: "comment" | "question";
        parent: BlockCommentObject;
        children: BlockCommentObject[];
        reactions: BlockCommentReactionObject[];
        user: UserObject;
        createdAt: string;
        updatedAt: string;
    }) {
        this.id = data.id;
        this.bookId = data.bookId;
        this.sectionId = data.sectionId;
        this.blockId = data.blockId;
        this.content = data.content;
        this.isEdited = data.isEdited;
        this.type = data.type;
        this.parent = data.parent;
        this.children = data.children;
        this.reactions = data.reactions;
        this.user = data.user;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
