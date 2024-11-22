import { addPreSendListener, removePreSendListener } from "@api/MessageEvents";
import definePlugin from "@utils/types";

let bold = false;

const BoldText = () => {
    addPreSendListener((_, message) => {
        if (message.content.match("!Boldtext")) {
            bold = !bold;
            message.content = message.content.replace("!Boldtext", "").trim();
        }
        if (bold) {
            message.content = "# " + message.content;
        }
    });
};

export default definePlugin({
    authors: [
        {
            name: "intmainvoidreturn0",
            id: 1291234047909171221n,
        },
    ],
    dependencies: ["MessageEventsAPI"],
    description: "Bold Texts",
    name: "BoldText",
    start: BoldText,
    stop: () => removePreSendListener(BoldText),
});
