"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function usePost(url, body) {
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (!body)
            return;
        let isMounted = true;
        const postData = () => __awaiter(this, void 0, void 0, function* () {
            setLoading(true);
            setError(null);
            try {
                const response = yield fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = yield response.json();
                if (isMounted) {
                    setData(result);
                }
            }
            catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            }
            finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        });
        postData();
        return () => {
            isMounted = false;
        };
    }, [url, body]);
    return [data, loading, error];
}
exports.default = usePost;
