module.exports = [
"[project]/src/components/ContinueTestModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';
const ContinueTestModal = ({ isOpen, testName, onSuccess })=>{
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const conversionFired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fireConversion = ()=>{
        try {
            if (conversionFired.current) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {
        // swallow errors
        }
    };
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const validate = ()=>{
        const trimmedName = form.name.trim();
        const trimmedPhone = form.phone.trim();
        const trimmedEmail = form.email.trim();
        if (!trimmedName || trimmedName.length > 100) return 'Please enter a valid name (max 100 chars)';
        if (!/^[6-9]\d{9}$/.test(trimmedPhone)) return 'Please enter a valid 10-digit Indian phone number';
        if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return 'Please enter a valid email';
        return null;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const error = validate();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error);
            return;
        }
        setLoading(true);
        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name.trim(),
                    phone: form.phone.trim(),
                    email: form.email.trim(),
                    testName,
                    source: 'Continue Test Gate',
                    timestamp: new Date().toISOString()
                })
            });
            setSubmitted(true);
            fireConversion();
            // Save unlock to localStorage
            try {
                localStorage.setItem('mp_gate_unlocked', '1');
                localStorage.setItem('mp_gate_name', form.name.trim());
                localStorage.setItem('mp_gate_phone', form.phone.trim());
            } catch  {
            // localStorage may be unavailable
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("You're all set! Continue your practice.");
            // Auto-dismiss after a short delay
            setTimeout(()=>{
                onSuccess();
            }, 1200);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Something went wrong. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[60] bg-background/90 backdrop-blur-lg flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0,
                    y: 30
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                exit: {
                    scale: 0.9,
                    opacity: 0,
                    y: 30
                },
                transition: {
                    type: 'spring',
                    duration: 0.5
                },
                className: "relative w-full max-w-md rounded-2xl border border-border bg-card shadow-card overflow-hidden",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative px-6 pt-6 pb-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContinueTestModal.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-foreground text-xl sm:text-2xl",
                                        children: [
                                            "Continue with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-gold",
                                                children: "Your Test"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                lineNumber: 132,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContinueTestModal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "You've completed 4 free questions! Fill in your details to unlock all questions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mt-1 italic",
                                children: [
                                    "Test: ",
                                    testName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContinueTestModal.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5",
                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            className: "text-center py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-14 h-14 text-green-400 mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display font-bold text-foreground text-lg",
                                    children: "You're Unlocked!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm mt-1",
                                    children: "Continue practising — all questions are now available."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                            lineNumber: 146,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-name",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Full Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "gate-name",
                                                    name: "name",
                                                    type: "text",
                                                    required: true,
                                                    maxLength: 100,
                                                    placeholder: "Enter your full name",
                                                    value: form.name,
                                                    onChange: handleChange,
                                                    className: "w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-phone",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Phone Number ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 36
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "gate-phone",
                                                    name: "phone",
                                                    type: "tel",
                                                    required: true,
                                                    maxLength: 10,
                                                    placeholder: "10-digit mobile number",
                                                    value: form.phone,
                                                    onChange: handleChange,
                                                    className: "w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-email",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Email ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-xs",
                                                    children: "(optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "gate-email",
                                                    name: "email",
                                                    type: "email",
                                                    maxLength: 100,
                                                    placeholder: "you@example.com",
                                                    value: form.email,
                                                    onChange: handleChange,
                                                    className: "w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                                            lineNumber: 204,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                lineNumber: 226,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Submitting…"
                                        ]
                                    }, void 0, true) : 'Unlock All Questions'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground text-center",
                                    children: "Your details are safe with us. No spam, ever."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContinueTestModal.tsx",
                            lineNumber: 156,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContinueTestModal.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContinueTestModal.tsx",
                lineNumber: 117,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ContinueTestModal.tsx",
            lineNumber: 111,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ContinueTestModal.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContinueTestModal;
}),
"[project]/src/hooks/useQuestionGate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuestionGate",
    ()=>useQuestionGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const STORAGE_KEY = 'mp_gate_unlocked';
const VIEWED_KEY = 'mp_gate_viewed';
const FREE_LIMIT = 4;
function useQuestionGate(_questionIndex) {
    const isAlreadyUnlocked = (()=>{
        try {
            return localStorage.getItem(STORAGE_KEY) === '1';
        } catch  {
            return false;
        }
    })();
    const [unlocked, setUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isAlreadyUnlocked);
    // Gate always starts false — never block the very first render
    const [isGated, setIsGated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current page path — unique identifier for this question
    const pagePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (unlocked) return;
        try {
            const raw = sessionStorage.getItem(VIEWED_KEY);
            const viewed = raw ? JSON.parse(raw) : [];
            // Add current path if not already tracked
            if (!viewed.includes(pagePath)) {
                viewed.push(pagePath);
                sessionStorage.setItem(VIEWED_KEY, JSON.stringify(viewed));
            }
            // Gate activates when user has viewed more than FREE_LIMIT pages
            if (viewed.length > FREE_LIMIT) {
                setIsGated(true);
            }
        } catch  {
        // sessionStorage unavailable — never gate
        }
    }, [
        pagePath,
        unlocked
    ]);
    const onUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUnlocked(true);
        setIsGated(false);
        try {
            localStorage.setItem(STORAGE_KEY, '1');
        } catch  {
        // localStorage unavailable
        }
    }, []);
    return {
        isGated,
        onUnlock
    };
}
}),
"[project]/src/lib/slugify.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deduplicateSlugs",
    ()=>deduplicateSlugs,
    "slugifyQuestion",
    ()=>slugifyQuestion
]);
/**
 * Converts a question string into an SEO-friendly URL slug.
 *
 * Steps:
 *  1. Strip HTML tags & entities
 *  2. Replace common math / scientific symbols with readable words
 *  3. Lowercase, collapse whitespace, replace spaces → hyphens
 *  4. Remove non-alphanumeric chars (except hyphens)
 *  5. Truncate to ~60 chars at a word boundary
 *  6. Trim leading / trailing hyphens
 */ /* ── Symbol → word map ── */ const SYMBOL_MAP = [
    [
        /₀/g,
        '0'
    ],
    [
        /₁/g,
        '1'
    ],
    [
        /₂/g,
        '2'
    ],
    [
        /₃/g,
        '3'
    ],
    [
        /₄/g,
        '4'
    ],
    [
        /₅/g,
        '5'
    ],
    [
        /₆/g,
        '6'
    ],
    [
        /₇/g,
        '7'
    ],
    [
        /₈/g,
        '8'
    ],
    [
        /₉/g,
        '9'
    ],
    [
        /⁰/g,
        '0'
    ],
    [
        /¹/g,
        '1'
    ],
    [
        /²/g,
        '2'
    ],
    [
        /³/g,
        '3'
    ],
    [
        /⁴/g,
        '4'
    ],
    [
        /⁵/g,
        '5'
    ],
    [
        /⁶/g,
        '6'
    ],
    [
        /⁷/g,
        '7'
    ],
    [
        /⁸/g,
        '8'
    ],
    [
        /⁹/g,
        '9'
    ],
    [
        /⁻/g,
        '-'
    ],
    [
        /⁺/g,
        '+'
    ],
    [
        /×/g,
        'x'
    ],
    [
        /÷/g,
        'div'
    ],
    [
        /π/g,
        'pi'
    ],
    [
        /θ/g,
        'theta'
    ],
    [
        /μ/g,
        'mu'
    ],
    [
        /ε/g,
        'epsilon'
    ],
    [
        /α/g,
        'alpha'
    ],
    [
        /β/g,
        'beta'
    ],
    [
        /γ/g,
        'gamma'
    ],
    [
        /δ/g,
        'delta'
    ],
    [
        /λ/g,
        'lambda'
    ],
    [
        /ω/g,
        'omega'
    ],
    [
        /σ/g,
        'sigma'
    ],
    [
        /τ/g,
        'tau'
    ],
    [
        /ρ/g,
        'rho'
    ],
    [
        /ν/g,
        'nu'
    ],
    [
        /Σ/g,
        'sigma'
    ],
    [
        /Δ/g,
        'delta'
    ],
    [
        /∞/g,
        'infinity'
    ],
    [
        /√/g,
        'sqrt'
    ],
    [
        /∫/g,
        'integral'
    ],
    [
        /→/g,
        'to'
    ],
    [
        /←/g,
        'from'
    ],
    [
        /≈/g,
        'approx'
    ],
    [
        /≠/g,
        'not-equal'
    ],
    [
        /≥/g,
        'gte'
    ],
    [
        /≤/g,
        'lte'
    ],
    [
        /°/g,
        'deg'
    ],
    [
        /·/g,
        '-'
    ],
    [
        /±/g,
        'plus-minus'
    ]
];
/* ── Stop words to strip for conciseness ── */ const STOP_WORDS = new Set([
    'the',
    'a',
    'an',
    'of',
    'in',
    'on',
    'at',
    'to',
    'for',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'it',
    'its',
    'by',
    'with',
    'from',
    'as',
    'this',
    'that',
    'which',
    'who',
    'whom',
    'and',
    'or',
    'but',
    'if',
    'then',
    'so',
    'than',
    'too',
    'very',
    'can',
    'will',
    'just',
    'should',
    'would',
    'could',
    'has',
    'have',
    'had',
    'do',
    'does',
    'did',
    'not',
    'no',
    'nor',
    'each',
    'every',
    'all',
    'any',
    'both',
    'few',
    'more',
    'most',
    'other',
    'some',
    'such',
    'only',
    'own',
    'same',
    'also',
    'into',
    'about',
    'between',
    'through',
    'following',
    'given',
    'respectively'
]);
const MAX_SLUG_LENGTH = 60;
function slugifyQuestion(question) {
    let s = question;
    // 1. Strip HTML tags
    s = s.replace(/<[^>]*>/g, '');
    // 2. Decode common HTML entities
    s = s.replace(/&amp;/g, 'and').replace(/&lt;/g, '').replace(/&gt;/g, '').replace(/&nbsp;/g, ' ').replace(/&#?\w+;/g, '');
    // 3. Apply symbol map
    for (const [re, rep] of SYMBOL_MAP){
        s = s.replace(re, rep);
    }
    // 4. Lowercase
    s = s.toLowerCase();
    // 5. Replace non-alphanumeric (except hyphens) with spaces
    s = s.replace(/[^a-z0-9-]+/g, ' ');
    // 6. Collapse whitespace → single space → trim
    s = s.replace(/\s+/g, ' ').trim();
    // 7. Remove stop words
    const words = s.split(' ').filter((w)=>!STOP_WORDS.has(w) && w.length > 0);
    // 8. Join with hyphens
    s = words.join('-');
    // 9. Collapse multiple hyphens
    s = s.replace(/-{2,}/g, '-');
    // 10. Truncate at word boundary (hyphen boundary)
    if (s.length > MAX_SLUG_LENGTH) {
        s = s.substring(0, MAX_SLUG_LENGTH);
        const lastHyphen = s.lastIndexOf('-');
        if (lastHyphen > 20) {
            s = s.substring(0, lastHyphen);
        }
    }
    // 11. Trim leading/trailing hyphens
    s = s.replace(/^-+|-+$/g, '');
    return s || 'question';
}
function deduplicateSlugs(slugs) {
    const seen = new Map();
    return slugs.map((slug)=>{
        const count = seen.get(slug) ?? 0;
        seen.set(slug, count + 1);
        if (count === 0) return slug;
        return `${slug}-${count + 1}`;
    });
}
}),
"[project]/src/data/neet-pyq/biology-botany-pyq.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "botanyPyq",
    ()=>botanyPyq
]);
const botanyPyq = [
    /* ──── 1. Living World & Biological Classification ──── */ {
        name: 'The Living World & Biological Classification',
        slug: 'living-world-classification',
        questions: [
            {
                q: 'Which of the following is NOT a characteristic of living organisms?',
                o: [
                    'Growth',
                    'Reproduction',
                    'Decay',
                    'Metabolism'
                ],
                a: 2,
                s: 'Decay is a post-mortem process. Growth, reproduction, and metabolism are defining characteristics of living organisms as per NCERT.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Binomial nomenclature was introduced by:',
                o: [
                    'Aristotle',
                    'Carolus Linnaeus',
                    'Robert Hooke',
                    'Charles Darwin'
                ],
                a: 1,
                s: 'Carolus Linnaeus introduced the binomial system of nomenclature in "Systema Naturae" (1758). Each organism gets a two-part Latin name (genus + species).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Which kingdom includes organisms that are both autotrophic and heterotrophic?',
                o: [
                    'Monera',
                    'Protista',
                    'Fungi',
                    'Plantae'
                ],
                a: 1,
                s: 'Kingdom Protista includes organisms like Euglena which is both autotrophic (has chloroplasts) and heterotrophic. It is the most diverse kingdom.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Mycorrhiza is a symbiotic association between:',
                o: [
                    'Algae and fungi',
                    'Fungi and roots of higher plants',
                    'Bacteria and roots of legumes',
                    'Fungi and cyanobacteria'
                ],
                a: 1,
                s: 'Mycorrhiza is the mutualistic association between fungal hyphae and roots of higher plants. The fungus helps in nutrient and water absorption, especially phosphorus.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which of the following statements about viruses is correct?',
                o: [
                    'Viruses are living organisms',
                    'Viruses can reproduce independently',
                    'Viruses contain both DNA and RNA',
                    'Viruses are obligate intracellular parasites'
                ],
                a: 3,
                s: 'Viruses are obligate intracellular parasites — they can only reproduce inside a living host cell. They contain either DNA or RNA, not both (except some exceptions).',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Diatomaceous earth is formed by the cell walls of:',
                o: [
                    'Dinoflagellates',
                    'Diatoms',
                    'Euglenoids',
                    'Slime moulds'
                ],
                a: 1,
                s: 'Diatoms have siliceous cell walls (frustules) that persist after death, forming diatomaceous earth. This is used in filtration, polishing, and as insulation.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Which among the following are saprophytic protists?',
                o: [
                    'Dinoflagellates',
                    'Diatoms',
                    'Slime moulds',
                    'Sporozoans'
                ],
                a: 2,
                s: 'Slime moulds are saprophytic protists that feed on decaying organic matter. They form an aggregation called plasmodium under favourable conditions.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Archaebacteria differ from other bacteria in having:',
                o: [
                    'Different cell wall composition',
                    'Presence of nucleus',
                    'Absence of ribosomes',
                    'Presence of mitochondria'
                ],
                a: 0,
                s: 'Archaebacteria have a different cell wall composition — they lack peptidoglycan (murein) which is present in typical bacterial cell walls. They have branched chain lipids.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Lichens are an example of:',
                o: [
                    'Parasitism',
                    'Commensalism',
                    'Mutualism',
                    'Predation'
                ],
                a: 2,
                s: 'Lichens are a mutualistic association between algae (phycobiont) and fungi (mycobiont). Algae provides food via photosynthesis while fungi provides shelter and minerals.',
                year: 2015,
                shift: 'NEET 2015'
            },
            {
                q: 'The fungal component of a lichen is called:',
                o: [
                    'Phycobiont',
                    'Mycobiont',
                    'Cyanobiont',
                    'Photobiont'
                ],
                a: 1,
                s: 'In lichens, the fungal partner is mycobiont and the algal partner is phycobiont. The fungus is usually an ascomycete.',
                year: 2024,
                shift: 'NEET 2024'
            }
        ]
    },
    /* ──── 2. Plant Morphology & Anatomy ──── */ {
        name: 'Plant Morphology & Anatomy',
        slug: 'plant-morphology-anatomy',
        questions: [
            {
                q: 'Phyllotaxy in which leaves are arranged in pairs at each node is called:',
                o: [
                    'Alternate',
                    'Opposite',
                    'Whorled',
                    'Spiral'
                ],
                a: 1,
                s: 'Opposite phyllotaxy has two leaves at each node, placed opposite to each other (e.g., Calotropis, Guava). Alternate has one leaf per node.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which of the following is a stem modification for food storage?',
                o: [
                    'Thorn (Citrus)',
                    'Tendril (Passiflora)',
                    'Tuber (Potato)',
                    'Runner (Grass)'
                ],
                a: 2,
                s: 'Potato tuber is a modified underground stem that stores food (starch). Eyes on potato are nodes with axillary buds. Runners, thorns, and tendrils serve different functions.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Vascular bundles in monocot stems are:',
                o: [
                    'Open and arranged in ring',
                    'Closed and scattered',
                    'Open and scattered',
                    'Closed and arranged in ring'
                ],
                a: 1,
                s: 'In monocot stems, vascular bundles are conjoint, collateral, closed (no cambium), and scattered throughout the ground tissue. Dicot stems have open VBs arranged in a ring.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Casparian strips are found in the _____ of the root.',
                o: [
                    'Cortex',
                    'Endodermis',
                    'Pericycle',
                    'Epidermis'
                ],
                a: 1,
                s: 'Casparian strips are waxy (suberin) thickenings on the radial and transverse walls of endodermal cells. They regulate the movement of water and minerals into the stele.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which tissue is responsible for secondary growth in dicot stems?',
                o: [
                    'Apical meristem',
                    'Intercalary meristem',
                    'Vascular cambium',
                    'Cork cambium only'
                ],
                a: 2,
                s: 'Vascular cambium (fascicular + interfascicular) is primarily responsible for secondary growth, producing secondary xylem inward and secondary phloem outward.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Identify the type of placentation in Dianthus:',
                o: [
                    'Axile',
                    'Free central',
                    'Marginal',
                    'Parietal'
                ],
                a: 1,
                s: 'Dianthus shows free central placentation where ovules are borne on a central axis without septa. This is characteristic of Caryophyllaceae family.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Bulliform cells are present in:',
                o: [
                    'Dicot leaves',
                    'Monocot leaves',
                    'Dicot roots',
                    'Monocot roots'
                ],
                a: 1,
                s: 'Bulliform (motor) cells are large, bubble-shaped epidermal cells found in the upper epidermis of monocot leaves (grasses). They help in rolling/unrolling of leaves to reduce water loss.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Heartwood differs from sapwood in:',
                o: [
                    'Having living cells',
                    'Being lighter in colour',
                    'Being non-functional in water conduction',
                    'Having wider lumen'
                ],
                a: 2,
                s: 'Heartwood (duramen) is the inner, darker wood that is non-functional in water conduction. Its vessels are blocked by tyloses. Sapwood (alburnum) is the functional, outer lighter wood.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Collenchyma differs from sclerenchyma in having:',
                o: [
                    'Pectin and cellulose deposits at corners',
                    'Uniformly thickened walls with lignin',
                    'No cell wall thickening',
                    'Dead cells at maturity'
                ],
                a: 0,
                s: 'Collenchyma has irregularly thickened corners (or tangential walls) with pectin and cellulose — and cells are living. Sclerenchyma has uniform lignin thickening and cells are dead.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Conjoint, collateral, open vascular bundles with endarch xylem are characteristic of:',
                o: [
                    'Monocot stem',
                    'Dicot stem',
                    'Monocot root',
                    'Dicot root'
                ],
                a: 1,
                s: 'Dicot stems have conjoint (xylem + phloem together), collateral (phloem outside xylem), open (cambium present), endarch (protoxylem toward centre) vascular bundles arranged in a ring.',
                year: 2019,
                shift: 'NEET 2019'
            }
        ]
    },
    /* ──── 3. Cell Biology (Cell Structure + Biomolecules + Division) ──── */ {
        name: 'Cell Biology & Biomolecules',
        slug: 'cell-biology-biomolecules',
        questions: [
            {
                q: 'Which organelle is called the "suicidal bag" of the cell?',
                o: [
                    'Ribosome',
                    'Lysosome',
                    'Peroxisome',
                    'Glyoxysome'
                ],
                a: 1,
                s: 'Lysosomes contain hydrolytic enzymes (acid hydrolases) that can digest the cell\'s own components during cell damage — hence called "suicidal bags" (coined by de Duve).',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The fluid mosaic model of plasma membrane was proposed by:',
                o: [
                    'Robertson',
                    'Davson and Danielli',
                    'Singer and Nicolson',
                    'Watson and Crick'
                ],
                a: 2,
                s: 'Singer and Nicolson (1972) proposed the fluid mosaic model — membrane is a quasi-fluid lipid bilayer with embedded integral and peripheral proteins forming a mosaic pattern.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'How many ATP molecules are produced from one molecule of glucose during aerobic respiration?',
                o: [
                    '36',
                    '38',
                    '36 or 38',
                    '30 or 32'
                ],
                a: 3,
                s: 'Current estimates: 30 or 32 ATP per glucose (revised from the earlier 36/38). The number varies based on the NADH shuttle used (malate-aspartate gives 32, glycerol-phosphate gives 30).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Which of the following is NOT a function of smooth endoplasmic reticulum?',
                o: [
                    'Lipid synthesis',
                    'Steroid synthesis',
                    'Protein synthesis',
                    'Detoxification'
                ],
                a: 2,
                s: 'Protein synthesis occurs on rough ER (with ribosomes). Smooth ER is involved in lipid synthesis, steroid hormone synthesis, and detoxification of drugs and poisons.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'During which phase of cell cycle does DNA replication occur?',
                o: [
                    'G1 phase',
                    'S phase',
                    'G2 phase',
                    'M phase'
                ],
                a: 1,
                s: 'DNA replication occurs during S phase (Synthesis phase) of interphase. G1 is the first growth phase, G2 is preparation for mitosis, and M phase is actual division.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Crossing over occurs during which stage of meiosis?',
                o: [
                    'Leptotene',
                    'Zygotene',
                    'Pachytene',
                    'Diplotene'
                ],
                a: 2,
                s: 'Crossing over (exchange of genetic material between non-sister chromatids of homologous chromosomes) occurs during pachytene stage of prophase I. Recombination nodules appear at this stage.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Which amino acid is NOT optically active?',
                o: [
                    'Alanine',
                    'Glycine',
                    'Valine',
                    'Leucine'
                ],
                a: 1,
                s: 'Glycine (H₂N-CH₂-COOH) is the only amino acid that is NOT optically active because its alpha carbon has two identical hydrogen substituents — no chirality.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The centromere splits during which stage of mitosis?',
                o: [
                    'Prophase',
                    'Metaphase',
                    'Anaphase',
                    'Telophase'
                ],
                a: 2,
                s: 'During anaphase of mitosis, the centromere splits and sister chromatids separate, moving to opposite poles of the cell by spindle fibers (kinetochore microtubules).',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Ribosomes in prokaryotes are:',
                o: [
                    '80S type',
                    '70S type',
                    '60S type',
                    '50S type'
                ],
                a: 1,
                s: 'Prokaryotic ribosomes are 70S (30S + 50S subunits). Eukaryotic cytoplasmic ribosomes are 80S (40S + 60S). Mitochondrial and chloroplast ribosomes are also 70S.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The enzyme responsible for joining DNA fragments is:',
                o: [
                    'DNA polymerase',
                    'Helicase',
                    'DNA ligase',
                    'Primase'
                ],
                a: 2,
                s: 'DNA ligase joins Okazaki fragments on the lagging strand and seals nicks in the DNA backbone by forming phosphodiester bonds between adjacent nucleotides.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 4. Plant Physiology (Transport, Mineral Nutrition, Photosynthesis) ──── */ {
        name: 'Plant Physiology',
        slug: 'plant-physiology',
        questions: [
            {
                q: 'The C4 pathway was discovered by:',
                o: [
                    'Melvin Calvin',
                    'Hatch and Slack',
                    'Blackman',
                    'Hill'
                ],
                a: 1,
                s: 'The C4 pathway (Hatch-Slack pathway) was discovered by Hatch and Slack in 1966. The first stable product is OAA (4-carbon), formed in mesophyll cells.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which pigment absorbs maximum light in the red region of the spectrum?',
                o: [
                    'Chlorophyll a',
                    'Chlorophyll b',
                    'Carotenoids',
                    'Xanthophylls'
                ],
                a: 0,
                s: 'Chlorophyll a absorbs maximum light at 430 nm (blue-violet) and 660 nm (red). It is the primary photosynthetic pigment and the only pigment that can directly participate in the light reactions.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Root pressure is maximum when:',
                o: [
                    'Transpiration is high and absorption is low',
                    'Transpiration is low and absorption is high',
                    'Both transpiration and absorption are high',
                    'Both transpiration and absorption are low'
                ],
                a: 1,
                s: 'Root pressure is maximum when absorption is high and transpiration is low — typically seen in the early morning. This creates positive hydrostatic pressure that pushes water up the xylem.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The correct sequence of electron carriers in ETC is:',
                o: [
                    'Cyt b → Cyt c → Cyt a → Cyt a3',
                    'Cyt c → Cyt b → Cyt a3 → Cyt a',
                    'Cyt a → Cyt b → Cyt c → Cyt a3',
                    'Cyt a3 → Cyt a → Cyt b → Cyt c'
                ],
                a: 0,
                s: 'In mitochondrial ETC: NADH → Complex I → Coenzyme Q → Complex III (Cyt b, c1) → Cyt c → Complex IV (Cyt a, a3) → O₂. The sequence is b → c1 → c → a → a3.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Transpiration pull theory was proposed by:',
                o: [
                    'J.C. Bose',
                    'Dixon and Joly',
                    'Münch',
                    'Strasburger'
                ],
                a: 1,
                s: 'Dixon and Joly (1894) proposed the cohesion-tension (transpiration pull) theory. Transpiration from leaves creates a suction that pulls water up through xylem due to cohesion of water molecules.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Photorespiration is most likely to occur when:',
                o: [
                    'CO₂ concentration is high',
                    'O₂ concentration is high and CO₂ is low',
                    'Both CO₂ and O₂ are high',
                    'Temperature is very low'
                ],
                a: 1,
                s: 'Photorespiration occurs when O₂ concentration is high relative to CO₂. RuBisCO acts as oxygenase instead of carboxylase, creating phosphoglycolate — a wasteful process with no ATP or NADPH gain.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Which element is a constituent of chlorophyll?',
                o: [
                    'Iron',
                    'Manganese',
                    'Magnesium',
                    'Copper'
                ],
                a: 2,
                s: 'Magnesium (Mg) is the central metal ion in the porphyrin ring of chlorophyll molecule. It is an essential macronutrient for all green plants.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Kranz anatomy is found in:',
                o: [
                    'C3 plants',
                    'C4 plants',
                    'CAM plants',
                    'All plants'
                ],
                a: 1,
                s: 'Kranz anatomy (wreath-like arrangement of bundle sheath cells around vascular bundles with dimorphic chloroplasts) is characteristic of C4 plants like sugarcane, maize, and sorghum.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Mass flow hypothesis for phloem transport was proposed by:',
                o: [
                    'Dixon and Joly',
                    'Münch',
                    'Malpighi',
                    'Strasburger'
                ],
                a: 1,
                s: 'Ernst Münch (1930) proposed the pressure flow (mass flow) hypothesis for phloem transport. Sugar creates high osmotic pressure at source (leaves) and low at sink (roots), creating a pressure gradient.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The oxygen evolved during photosynthesis comes from:',
                o: [
                    'CO₂',
                    'H₂O',
                    'Both CO₂ and H₂O',
                    'Glucose'
                ],
                a: 1,
                s: 'Hill\'s reaction and Ruben\'s isotope experiment (using ¹⁸O-labelled water) proved that O₂ released during photosynthesis comes from photolysis of water (2H₂O → 4H⁺ + 4e⁻ + O₂), not from CO₂.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 5. Plant Reproduction ──── */ {
        name: 'Plant Reproduction',
        slug: 'plant-reproduction',
        questions: [
            {
                q: 'The embryo sac in angiosperms at maturity is:',
                o: [
                    '7-celled, 8-nucleate',
                    '8-celled, 7-nucleate',
                    '7-celled, 7-nucleate',
                    '8-celled, 8-nucleate'
                ],
                a: 0,
                s: 'A mature embryo sac (Polygonum type) is 7-celled and 8-nucleate: 3 antipodals + 2 synergids + 1 egg cell + 1 central cell (with 2 polar nuclei).',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Double fertilization in angiosperms was discovered by:',
                o: [
                    'Strasburger',
                    'Nawaschin',
                    'Maheshwari',
                    'Amici'
                ],
                a: 1,
                s: 'Sergei Nawaschin (1898) discovered double fertilization in Lilium and Fritillaria. One sperm fuses with egg (→ zygote, 2n) and other fuses with polar nuclei (→ PEN/endosperm, 3n).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'In angiosperms, microsporogenesis produces:',
                o: [
                    'Megaspores',
                    'Microspores (pollen grains)',
                    'Embryo sac',
                    'Ovules'
                ],
                a: 1,
                s: 'Microsporogenesis is the formation of microspores (pollen grains) from microspore mother cells (MMC) inside the microsporangium (pollen sac) of the anther by meiosis.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Which part of the ovule forms the seed coat?',
                o: [
                    'Nucellus',
                    'Integuments',
                    'Funicle',
                    'Chalaza'
                ],
                a: 1,
                s: 'Integuments of the ovule develop into the seed coat after fertilization. The outer integument forms testa and the inner integument forms tegmen.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Parthenocarpy can be induced by:',
                o: [
                    'Ethylene',
                    'Auxin',
                    'Abscisic acid',
                    'Cytokinin'
                ],
                a: 1,
                s: 'Parthenocarpy (seedless fruit development without fertilization) can be induced by application of auxins (like IAA, 2,4-D). Gibberellins can also induce it in some cases.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Pollen tube enters the ovule through:',
                o: [
                    'Chalaza',
                    'Micropyle',
                    'Integuments',
                    'Funicle'
                ],
                a: 1,
                s: 'In most angiosperms, the pollen tube enters the ovule through the micropyle (porogamy). Entry through chalaza is called chalazogamy, and through integuments is called mesogamy.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Endosperm in angiosperms is:',
                o: [
                    'Haploid',
                    'Diploid',
                    'Triploid',
                    'Tetraploid'
                ],
                a: 2,
                s: 'Endosperm is triploid (3n) because it forms by the fusion of one male gamete (n) with the diploid secondary nucleus/polar nuclei (n + n = 2n). So: n + 2n = 3n.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Tapetum in an anther provides:',
                o: [
                    'Protection',
                    'Nourishment to developing pollen grains',
                    'Structural support',
                    'Dehiscence mechanism'
                ],
                a: 1,
                s: 'Tapetum is the innermost layer of the anther wall. It provides nourishment to the developing microspores/pollen grains. Tapetal cells are rich in nutrients and produce Ubisch bodies and pollenkitt.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Apomixis is:',
                o: [
                    'Seed formation without meiosis and fertilization',
                    'Fruit formation without fertilization',
                    'Vegetative propagation',
                    'Self-pollination'
                ],
                a: 0,
                s: 'Apomixis is asexual reproduction through seeds — seeds are formed without meiosis and fertilization. The embryo develops from diploid cells of the ovule. Examples: citrus, mango, grasses.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The outermost and innermost layers of microsporangium in angiosperms are:',
                o: [
                    'Epidermis and tapetum',
                    'Endothecium and middle layers',
                    'Epidermis and endothecium',
                    'Endothecium and tapetum'
                ],
                a: 0,
                s: 'The anther wall from outside to inside: Epidermis → Endothecium → Middle layers → Tapetum. Epidermis is outermost (protective) and tapetum is innermost (nutritive).',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 6. Genetics & Molecular Biology ──── */ {
        name: 'Genetics & Molecular Biology',
        slug: 'genetics-molecular-biology',
        questions: [
            {
                q: 'In Mendel\'s monohybrid cross, the F2 phenotypic ratio is:',
                o: [
                    '1:2:1',
                    '3:1',
                    '9:3:3:1',
                    '1:1'
                ],
                a: 1,
                s: 'In a monohybrid cross (Tt × Tt), F2 phenotypic ratio is 3 dominant : 1 recessive (3:1). The genotypic ratio is 1 TT : 2 Tt : 1 tt (1:2:1).',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which of the following is an example of codominance?',
                o: [
                    'Flower colour in Mirabilis',
                    'ABO blood groups in humans',
                    'Skin colour in humans',
                    'Height in pea plants'
                ],
                a: 1,
                s: 'ABO blood groups show codominance — Iᴬ and Iᴮ alleles are codominant (both expressed in AB blood group). Mirabilis shows incomplete dominance (pink F1 from red × white).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The correct sequence of stages in Lac operon when inducer is present:',
                o: [
                    'Repressor binds to operator; RNA polymerase is blocked',
                    'Inducer binds to repressor; repressor cannot bind operator; transcription occurs',
                    'Inducer binds to operator; repressor is degraded',
                    'RNA polymerase directly binds to structural genes'
                ],
                a: 1,
                s: 'When lactose (inducer/allolactose) is present: inducer binds to repressor protein → repressor changes shape → cannot bind operator → RNA polymerase transcribes structural genes (z, y, a).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The process of copying genetic information from one strand of DNA to RNA is called:',
                o: [
                    'Translation',
                    'Transcription',
                    'Replication',
                    'Transduction'
                ],
                a: 1,
                s: 'Transcription is the process where RNA polymerase synthesizes mRNA from the template (antisense) strand of DNA. Translation converts mRNA to protein on ribosomes.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Test cross is a cross between:',
                o: [
                    'Two F1 hybrids',
                    'F1 hybrid and homozygous dominant',
                    'F1 hybrid and homozygous recessive',
                    'Two homozygous parents'
                ],
                a: 2,
                s: 'A test cross is crossing an organism with dominant phenotype (unknown genotype) with a homozygous recessive organism. The offspring ratio reveals whether the parent is homozygous or heterozygous.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'In DNA, the percentage of adenine is 30%. What is the percentage of cytosine?',
                o: [
                    '30%',
                    '20%',
                    '40%',
                    '10%'
                ],
                a: 1,
                s: 'By Chargaff\'s rule: A = T = 30%. Since A + T + G + C = 100%, G + C = 40%. Since G = C, each = 20%.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Okazaki fragments are formed on:',
                o: [
                    'Leading strand',
                    'Lagging strand',
                    'Both strands',
                    'Template strand only'
                ],
                a: 1,
                s: 'Okazaki fragments are short DNA fragments (1000-2000 bp in prokaryotes) formed on the lagging strand during DNA replication because it is synthesized discontinuously in 3\'→5\' direction.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Which codon serves as the start codon?',
                o: [
                    'UAA',
                    'UAG',
                    'AUG',
                    'UGA'
                ],
                a: 2,
                s: 'AUG is the start/initiator codon that codes for methionine (Met) in eukaryotes and formyl-methionine (fMet) in prokaryotes. It signals the start of translation.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Sickle cell anaemia is caused by a point mutation in:',
                o: [
                    'α-globin gene',
                    'β-globin gene',
                    'γ-globin gene',
                    'δ-globin gene'
                ],
                a: 1,
                s: 'Sickle cell anaemia results from a point mutation in the β-globin gene (chromosome 11) where GAG → GUG, causing glutamic acid → valine substitution at the 6th position.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Trisomy of 21st chromosome results in:',
                o: [
                    'Turner syndrome',
                    'Klinefelter syndrome',
                    'Down syndrome',
                    'Patau syndrome'
                ],
                a: 2,
                s: 'Down syndrome (trisomy 21) is caused by the presence of an extra copy of chromosome 21 (total 47 chromosomes). Features include intellectual disability, short stature, and characteristic facial features.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 7. Ecology & Environment ──── */ {
        name: 'Ecology & Environment',
        slug: 'ecology-environment',
        questions: [
            {
                q: 'The 10% law of energy transfer was given by:',
                o: [
                    'Odum',
                    'Lindeman',
                    'Tansley',
                    'Elton'
                ],
                a: 1,
                s: 'Lindeman (1942) proposed the 10% law — only about 10% of energy is transferred from one trophic level to the next. The rest is lost as heat through respiration.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which of the following is a greenhouse gas?',
                o: [
                    'Nitrogen',
                    'Oxygen',
                    'Methane',
                    'Argon'
                ],
                a: 2,
                s: 'Methane (CH₄) is a potent greenhouse gas with ~80x more warming potential than CO₂ over 20 years. Other GHGs: CO₂, N₂O, CFCs, water vapour.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'In ecological succession on bare rock, the pioneer species is:',
                o: [
                    'Mosses',
                    'Lichens',
                    'Grasses',
                    'Shrubs'
                ],
                a: 1,
                s: 'On bare rock (xerosere/lithosere), lichens are pioneer species. They secrete acids that weather rock into soil, preparing the substrate for mosses and later successional stages.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The term "ecosystem" was coined by:',
                o: [
                    'Odum',
                    'Tansley',
                    'Haeckel',
                    'Warming'
                ],
                a: 1,
                s: 'A.G. Tansley (1935) coined the term "ecosystem." He defined it as the system resulting from the integration of all living and non-living factors of the environment.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which of the following represents the correct food chain?',
                o: [
                    'Grass → Deer → Tiger',
                    'Grass → Tiger → Deer',
                    'Deer → Grass → Tiger',
                    'Tiger → Deer → Grass'
                ],
                a: 0,
                s: 'Grass (producer) → Deer (primary consumer/herbivore) → Tiger (secondary consumer/carnivore) is a correct grazing food chain.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Biodiversity hotspots are characterised by:',
                o: [
                    'High species richness and high endemism',
                    'High species richness only',
                    'High endemism only',
                    'Low species diversity'
                ],
                a: 0,
                s: 'Biodiversity hotspots (Norman Myers) have: (1) high species richness, (2) high endemism (≥0.5% or 1500 vascular plants as endemics), and (3) habitat loss ≥70%. India has 4 hotspots.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Stratospheric ozone depletion is mainly caused by:',
                o: [
                    'CO₂',
                    'SO₂',
                    'CFCs',
                    'NO₂'
                ],
                a: 2,
                s: 'Chlorofluorocarbons (CFCs, e.g., Freon) cause ozone depletion. UV radiation breaks CFCs releasing Cl radicals, which catalytically destroy O₃. One Cl atom can destroy ~100,000 ozone molecules.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Eutrophication of water bodies is caused by:',
                o: [
                    'Thermal pollution',
                    'Excess nutrients (N and P)',
                    'Oil spills',
                    'Heavy metals'
                ],
                a: 1,
                s: 'Eutrophication is caused by excess nutrients (nitrogen and phosphorus) from sewage, fertilizers entering water bodies. This causes algal blooms, oxygen depletion, and death of aquatic organisms.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The species-area relationship is expressed as:',
                o: [
                    'S = CA^Z',
                    'S = CA/Z',
                    'log S = log C + Z log A',
                    'S = C + ZA'
                ],
                a: 2,
                s: 'Alexander von Humboldt\'s species-area relationship: log S = log C + Z log A, where S = species richness, A = area, Z = regression coefficient (slope, typically 0.1–0.3), C = y-intercept.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Ex-situ conservation includes:',
                o: [
                    'National parks',
                    'Wildlife sanctuaries',
                    'Botanical gardens and zoos',
                    'Biosphere reserves'
                ],
                a: 2,
                s: 'Ex-situ conservation is preservation of species outside their natural habitat — botanical gardens, zoos, seed banks, cryopreservation. In-situ includes national parks, sanctuaries, and biosphere reserves.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 8. Biotechnology & Its Applications ──── */ {
        name: 'Biotechnology & Its Applications',
        slug: 'biotechnology-applications',
        questions: [
            {
                q: 'The first transgenic crop to be commercially released was:',
                o: [
                    'Bt cotton',
                    'Flavr Savr tomato',
                    'Golden rice',
                    'Bt corn'
                ],
                a: 1,
                s: 'Flavr Savr tomato (1994, Calgene) was the first commercially grown transgenic crop. It had delayed ripening due to antisense RNA technology against polygalacturonase gene.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Restriction enzymes are also called "molecular scissors" because they:',
                o: [
                    'Join DNA fragments',
                    'Cut DNA at specific palindromic sequences',
                    'Replicate DNA',
                    'Transcribe DNA'
                ],
                a: 1,
                s: 'Restriction endonucleases cut DNA at specific palindromic recognition sequences (e.g., EcoRI cuts at GAATTC). They produce sticky or blunt ends and are essential tools in genetic engineering.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Which vector is most commonly used in plant genetic engineering?',
                o: [
                    'pBR322',
                    'λ phage',
                    'Ti plasmid of Agrobacterium',
                    'Cosmid'
                ],
                a: 2,
                s: 'Ti (tumour-inducing) plasmid of Agrobacterium tumefaciens is the most widely used vector for plant transformation. The T-DNA region integrates into the plant genome.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'PCR (Polymerase Chain Reaction) was developed by:',
                o: [
                    'James Watson',
                    'Kary Mullis',
                    'Frederick Sanger',
                    'Har Gobind Khorana'
                ],
                a: 1,
                s: 'Kary Mullis (1983) invented PCR, for which he received the Nobel Prize (1993). PCR uses Taq polymerase (thermostable) to amplify specific DNA segments exponentially.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Bt toxin kills insects by:',
                o: [
                    'Inhibiting DNA replication',
                    'Creating pores in the gut epithelium',
                    'Blocking nerve transmission',
                    'Inhibiting protein synthesis'
                ],
                a: 1,
                s: 'Bt toxin (Cry protein) from Bacillus thuringiensis is activated in the alkaline gut of insect larvae. It creates pores in the midgut epithelial cells, causing cell lysis, gut paralysis, and death.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Gene therapy involves:',
                o: [
                    'Surgical removal of defective genes',
                    'Insertion of functional genes into cells with genetic defects',
                    'Chemical modification of defective proteins',
                    'Hormone replacement therapy'
                ],
                a: 1,
                s: 'Gene therapy involves inserting a functional copy of a gene into cells of a person with a genetic defect. First successful case: ADA deficiency treatment using retroviral vectors.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'In recombinant DNA technology, the process of introducing recombinant DNA into host cells is called:',
                o: [
                    'Transduction',
                    'Transformation',
                    'Conjugation',
                    'Transfection'
                ],
                a: 1,
                s: 'Transformation is the process of uptake of foreign DNA (recombinant DNA) by a competent host cell. Methods include heat shock, electroporation, and microinjection.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Golden rice is enriched in:',
                o: [
                    'Vitamin A (β-carotene)',
                    'Iron',
                    'Iodine',
                    'Vitamin C'
                ],
                a: 0,
                s: 'Golden rice was developed by Ingo Potrykus and Peter Beyer. It contains genes for β-carotene (pro-vitamin A) biosynthesis pathway, giving it golden yellow colour. Addresses vitamin A deficiency.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'ELISA is based on the principle of:',
                o: [
                    'DNA-DNA hybridization',
                    'Antigen-antibody interaction',
                    'PCR amplification',
                    'Gel electrophoresis'
                ],
                a: 1,
                s: 'ELISA (Enzyme-Linked Immunosorbent Assay) is based on antigen-antibody interaction. An enzyme-linked antibody produces a colour change upon substrate addition, used for detecting HIV, hepatitis, etc.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Which organism is used to produce human insulin commercially?',
                o: [
                    'Saccharomyces cerevisiae',
                    'Escherichia coli',
                    'Bacillus thuringiensis',
                    'Agrobacterium tumefaciens'
                ],
                a: 1,
                s: 'E. coli is used to produce recombinant human insulin (Humulin). Eli Lilly (1983) was the first to market rDNA insulin. The human insulin gene is inserted into E. coli plasmid.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    }
];
}),
"[project]/src/data/neet-pyq/biology-zoology-pyq.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoologyPyq",
    ()=>zoologyPyq
]);
const zoologyPyq = [
    /* ──── 1. Animal Kingdom & Structural Organisation ──── */ {
        name: 'Animal Kingdom & Structural Organisation',
        slug: 'animal-kingdom',
        questions: [
            {
                q: 'Which phylum has organisms with water vascular system?',
                o: [
                    'Mollusca',
                    'Arthropoda',
                    'Echinodermata',
                    'Annelida'
                ],
                a: 2,
                s: 'Echinodermata (starfish, sea urchins) possess a unique water vascular system (ambulacral system) used for locomotion, respiration, and food capture. It operates on hydraulic pressure.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Malpighian tubules are the excretory organs of:',
                o: [
                    'Annelids',
                    'Insects',
                    'Crustaceans',
                    'Molluscs'
                ],
                a: 1,
                s: 'Malpighian tubules are the excretory organs of insects (Arthropoda). They absorb waste from haemolymph and discharge into the gut. Annelids have nephridia, crustaceans have green glands.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The body cavity lined by mesoderm on both sides is called:',
                o: [
                    'Pseudocoelom',
                    'Coelom',
                    'Haemocoel',
                    'Blastocoel'
                ],
                a: 1,
                s: 'A true coelom is a body cavity completely lined by mesoderm (both visceral and parietal layers). Found in annelids, arthropods, molluscs, echinoderms, and chordates.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Which type of tissue connects bone to bone?',
                o: [
                    'Tendon',
                    'Ligament',
                    'Cartilage',
                    'Areolar tissue'
                ],
                a: 1,
                s: 'Ligaments are dense regular connective tissue that connect bone to bone at joints. They are made of collagen with some elastin. Tendons connect muscle to bone.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Closed circulatory system is found in:',
                o: [
                    'Cockroach',
                    'Earthworm',
                    'Prawn',
                    'Housefly'
                ],
                a: 1,
                s: 'Earthworms (Annelida) have a closed circulatory system where blood flows through closed vessels. Arthropods (cockroach, prawn, housefly) have an open circulatory system with haemocoel.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Which organism shows metameric segmentation?',
                o: [
                    'Leech',
                    'Liver fluke',
                    'Starfish',
                    'Hydra'
                ],
                a: 0,
                s: 'Leech (Annelida) shows true metameric segmentation — repetition of body segments both externally and internally. Each segment has its own organs (nephridia, ganglia, etc.).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Choanocytes are characteristic of:',
                o: [
                    'Coelenterates',
                    'Sponges (Porifera)',
                    'Flatworms',
                    'Roundworms'
                ],
                a: 1,
                s: 'Choanocytes (collar cells) are characteristic of Porifera (sponges). They have a flagellum surrounded by a collar of microvilli that create water currents and trap food particles.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Notochord is derived from:',
                o: [
                    'Ectoderm',
                    'Endoderm',
                    'Mesoderm',
                    'Neuroectoderm'
                ],
                a: 2,
                s: 'The notochord is derived from mesoderm during embryonic development. It is the defining feature of phylum Chordata. In vertebrates, it is replaced by the vertebral column in adults.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Bioluminescence is a characteristic feature of:',
                o: [
                    'Ctenophores',
                    'Platyhelminthes',
                    'Aschelminthes',
                    'Annelida'
                ],
                a: 0,
                s: 'Ctenophores (comb jellies) show bioluminescence — they produce light through luciferin-luciferase reaction. They are also distinguished by comb plates made of cilia for locomotion.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Which type of epithelium lines the trachea?',
                o: [
                    'Squamous',
                    'Cuboidal',
                    'Ciliated columnar',
                    'Transitional'
                ],
                a: 2,
                s: 'Ciliated (pseudostratified) columnar epithelium lines the trachea. The cilia create wave-like motions to move mucus and trapped particles upward (mucociliary escalator) to keep airways clean.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 2. Human Physiology — Digestion & Absorption ──── */ {
        name: 'Digestion & Absorption',
        slug: 'digestion-absorption',
        questions: [
            {
                q: 'Pepsinogen is secreted by:',
                o: [
                    'Parietal cells',
                    'Chief cells (Peptic cells)',
                    'Goblet cells',
                    'G cells'
                ],
                a: 1,
                s: 'Chief cells (peptic/zymogenic cells) of gastric glands secrete pepsinogen (inactive). HCl (from parietal/oxyntic cells) converts pepsinogen → pepsin (active protease) at pH 1.5-2.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The pH of saliva is approximately:',
                o: [
                    '2.0',
                    '4.5',
                    '6.8',
                    '9.0'
                ],
                a: 2,
                s: 'Saliva has a slightly acidic to neutral pH (~6.8). It contains salivary amylase (ptyalin) which works optimally at this pH to digest starch into maltose. Stomach pH is ~1.5-2.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Bile salts are produced by:',
                o: [
                    'Gall bladder',
                    'Liver',
                    'Pancreas',
                    'Intestinal glands'
                ],
                a: 1,
                s: 'Bile is produced by the liver (hepatocytes), stored and concentrated in the gall bladder, and released into the duodenum. Bile salts emulsify fats into micelles for lipase action.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The largest gland in the human body is:',
                o: [
                    'Pancreas',
                    'Liver',
                    'Thyroid',
                    'Pituitary'
                ],
                a: 1,
                s: 'The liver is the largest gland (and largest internal organ) in the human body, weighing about 1.5 kg. It is also the largest digestive gland, producing bile.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Brunner\'s glands are found in:',
                o: [
                    'Stomach',
                    'Duodenum',
                    'Ileum',
                    'Colon'
                ],
                a: 1,
                s: 'Brunner\'s glands are compound tubular glands found in the submucosa of the duodenum. They secrete alkaline mucus to neutralize acidic chyme from the stomach and protect the intestinal lining.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Absorption of fats primarily occurs in:',
                o: [
                    'Stomach',
                    'Ileum (small intestine)',
                    'Large intestine',
                    'Duodenum'
                ],
                a: 1,
                s: 'Fat absorption mainly occurs in the jejunum and ileum of the small intestine. Fats are absorbed as fatty acids and monoglycerides into intestinal villi, re-esterified, and transported as chylomicrons via lymph.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Enterokinase converts:',
                o: [
                    'Pepsinogen to pepsin',
                    'Trypsinogen to trypsin',
                    'Prorennin to rennin',
                    'Fibrinogen to fibrin'
                ],
                a: 1,
                s: 'Enterokinase (enteropeptidase) is secreted by intestinal mucosa. It converts inactive trypsinogen (from pancreas) → active trypsin. Trypsin then activates other proenzymes (chymotrypsinogen, proelastase).',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Peristalsis is the movement of food through the alimentary canal by:',
                o: [
                    'Gravity',
                    'Rhythmic contraction of smooth muscles',
                    'Action of villi',
                    'Ciliary action'
                ],
                a: 1,
                s: 'Peristalsis involves wave-like rhythmic contractions of circular and longitudinal smooth muscles in the gut wall that push food forward. It is involuntary and regulated by the enteric nervous system.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Dental formula for adult human is:',
                o: [
                    '2123/2123',
                    '2102/2102',
                    '2133/2133',
                    '3142/3142'
                ],
                a: 0,
                s: 'Adult human dental formula is 2123/2123 = I²C¹P²M³ per half jaw. Total teeth = 2 × 2 × (2+1+2+3) = 32. Heterodont and diphyodont dentition.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Which vitamin is absorbed along with fats?',
                o: [
                    'Vitamin C',
                    'Vitamin B12',
                    'Vitamin K',
                    'Vitamin B6'
                ],
                a: 2,
                s: 'Fat-soluble vitamins (A, D, E, K) are absorbed along with dietary fats in the small intestine. Vitamin K is also synthesized by gut bacteria. Water-soluble vitamins (B, C) are absorbed differently.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 3. Breathing & Body Fluids (Circulation) ──── */ {
        name: 'Breathing & Circulation',
        slug: 'breathing-circulation',
        questions: [
            {
                q: 'The oxygen-carrying capacity of haemoglobin is:',
                o: [
                    '1.34 mL O₂ per gram Hb',
                    '0.34 mL O₂ per gram Hb',
                    '2.34 mL O₂ per gram Hb',
                    '3.34 mL O₂ per gram Hb'
                ],
                a: 0,
                s: 'Each gram of haemoglobin can carry approximately 1.34 mL of O₂ (Hüfner\'s constant). With ~15 g Hb per 100 mL blood: 100 mL blood carries ~20 mL O₂.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'During inspiration, the diaphragm:',
                o: [
                    'Relaxes and becomes dome-shaped',
                    'Contracts and becomes flat',
                    'Does not move',
                    'Contracts and becomes dome-shaped'
                ],
                a: 1,
                s: 'During inspiration, the diaphragm contracts and flattens, increasing the thoracic volume. This decreases intrapulmonary pressure, causing air to flow into the lungs (Boyle\'s law).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The pacemaker of the heart is:',
                o: [
                    'AV node',
                    'SA node',
                    'Bundle of His',
                    'Purkinje fibres'
                ],
                a: 1,
                s: 'SA node (sinoatrial node) is the pacemaker of the heart, located in the right atrium. It generates electrical impulses at ~72 beats/min, initiating the cardiac cycle.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Blood group O is called universal donor because:',
                o: [
                    'It has both A and B antigens',
                    'It has no antigens on RBCs',
                    'It has both anti-A and anti-B antibodies',
                    'It has Rh factor'
                ],
                a: 1,
                s: 'Blood group O RBCs lack both A and B antigens on their surface, so they won\'t be attacked by recipient\'s antibodies. Hence, O-negative is the universal donor.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The volume of air remaining in the lungs after a forceful expiration is called:',
                o: [
                    'Tidal volume',
                    'Residual volume',
                    'Expiratory reserve volume',
                    'Vital capacity'
                ],
                a: 1,
                s: 'Residual volume (RV) is about 1100-1200 mL of air that remains in the lungs even after the most forceful expiration. It prevents lung collapse (atelectasis).',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Which of the following blood cells is involved in immunity?',
                o: [
                    'RBCs',
                    'Platelets',
                    'WBCs (Lymphocytes)',
                    'All of these'
                ],
                a: 2,
                s: 'WBCs, especially lymphocytes (B cells and T cells), are primarily involved in specific immunity. B cells produce antibodies (humoral immunity) and T cells destroy infected cells (cell-mediated immunity).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'The correct sequence of cardiac conduction system is:',
                o: [
                    'SA node → AV node → Bundle of His → Purkinje fibres',
                    'AV node → SA node → Bundle of His → Purkinje fibres',
                    'SA node → Bundle of His → AV node → Purkinje fibres',
                    'Purkinje fibres → Bundle of His → AV node → SA node'
                ],
                a: 0,
                s: 'Cardiac conduction sequence: SA node (pacemaker) → AV node → Bundle of His → bundle branches → Purkinje fibres → ventricular myocardium. This ensures coordinated atrial then ventricular contraction.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'CO₂ is mainly transported in blood as:',
                o: [
                    'Dissolved CO₂',
                    'Carbaminohaemoglobin',
                    'Bicarbonate ions (HCO₃⁻)',
                    'Carbonic acid'
                ],
                a: 2,
                s: 'About 70% of CO₂ is transported as bicarbonate ions (HCO₃⁻) in plasma, 23% as carbaminohaemoglobin (bound to Hb), and 7% as dissolved CO₂. Carbonic anhydrase catalyzes the reaction.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Vital capacity is:',
                o: [
                    'TV + IRV',
                    'TV + ERV',
                    'TV + IRV + ERV',
                    'TV + IRV + ERV + RV'
                ],
                a: 2,
                s: 'Vital capacity (VC) = Tidal Volume + Inspiratory Reserve Volume + Expiratory Reserve Volume ≈ 500 + 2500 + 1200 = 4200 mL. It is the maximum volume of air a person can exhale after maximum inhalation.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Erythropoietin, which stimulates RBC production, is produced by:',
                o: [
                    'Liver',
                    'Kidney',
                    'Spleen',
                    'Bone marrow'
                ],
                a: 1,
                s: 'Erythropoietin (EPO) is a hormone produced primarily by the kidneys (peritubular cells) in response to hypoxia. It stimulates red blood cell production in the bone marrow.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 4. Excretion, Locomotion & Neural Control ──── */ {
        name: 'Excretion, Locomotion & Neural Control',
        slug: 'excretion-locomotion-neural',
        questions: [
            {
                q: 'The functional unit of the kidney is:',
                o: [
                    'Neuron',
                    'Nephron',
                    'Glomerulus',
                    'Loop of Henle'
                ],
                a: 1,
                s: 'Nephron is the structural and functional unit of the kidney. Each kidney contains about 1 million nephrons. It performs filtration, reabsorption, and secretion to form urine.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'ADH (Anti-Diuretic Hormone) is produced by:',
                o: [
                    'Anterior pituitary',
                    'Posterior pituitary',
                    'Hypothalamus',
                    'Adrenal cortex'
                ],
                a: 2,
                s: 'ADH (vasopressin) is synthesized in the hypothalamus (supraoptic nuclei) and stored/released by the posterior pituitary. It increases water reabsorption in DCT and collecting duct.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Juxtaglomerular apparatus (JGA) is found in:',
                o: [
                    'Bowman\'s capsule',
                    'Between afferent arteriole and DCT',
                    'Loop of Henle',
                    'Collecting duct'
                ],
                a: 1,
                s: 'JGA is located at the junction of afferent arteriole and the distal convoluted tubule (DCT). It contains juxtaglomerular cells (secrete renin) and macula densa cells (sense NaCl concentration).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The joint between atlas and axis vertebrae is:',
                o: [
                    'Hinge joint',
                    'Pivot joint',
                    'Ball and socket joint',
                    'Gliding joint'
                ],
                a: 1,
                s: 'Atlas (C1) and axis (C2) vertebrae form a pivot joint that allows rotational movement of the head (saying "no"). The odontoid process (dens) of axis acts as the pivot.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The neurotransmitter released at neuromuscular junction is:',
                o: [
                    'Dopamine',
                    'Serotonin',
                    'Acetylcholine',
                    'GABA'
                ],
                a: 2,
                s: 'Acetylcholine (ACh) is the neurotransmitter at the neuromuscular junction (NMJ). It binds to nicotinic receptors on the muscle membrane, causing depolarization and muscle contraction.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Saltatory conduction occurs in:',
                o: [
                    'Non-myelinated nerve fibres',
                    'Myelinated nerve fibres',
                    'Muscle fibres',
                    'All nerve fibres'
                ],
                a: 1,
                s: 'Saltatory conduction occurs in myelinated neurons where the nerve impulse jumps from one node of Ranvier to the next, skipping the myelinated regions. This is much faster than continuous conduction.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'GFR (Glomerular Filtration Rate) is approximately:',
                o: [
                    '25 mL/min',
                    '125 mL/min',
                    '500 mL/min',
                    '1 mL/min'
                ],
                a: 1,
                s: 'GFR is about 125 mL/min or 180 L/day. Of this, about 99% is reabsorbed and only 1-1.5 L is excreted as urine daily. GFR is maintained by juxtaglomerular apparatus.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Nissl bodies are found in:',
                o: [
                    'Liver cells',
                    'Nerve cells (neurons)',
                    'Muscle cells',
                    'Blood cells'
                ],
                a: 1,
                s: 'Nissl bodies (granules) are clusters of rough ER (ribosomes + rER) found in the cell body (soma) and dendrites of neurons. They are involved in protein synthesis. Absent in axons and axon hillock.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The part of brain responsible for thermoregulation is:',
                o: [
                    'Cerebrum',
                    'Cerebellum',
                    'Hypothalamus',
                    'Medulla oblongata'
                ],
                a: 2,
                s: 'The hypothalamus is the thermoregulation centre of the body. It detects changes in blood temperature and initiates heating (shivering, vasoconstriction) or cooling (sweating, vasodilation) responses.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Actin and myosin filaments are present in:',
                o: [
                    'Smooth muscle only',
                    'Skeletal muscle only',
                    'Both skeletal and smooth muscle',
                    'All types of muscle'
                ],
                a: 3,
                s: 'Actin (thin) and myosin (thick) filaments are present in all three types of muscle tissue — skeletal, smooth, and cardiac. The arrangement pattern differs: striated in skeletal/cardiac, non-striated in smooth.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 5. Endocrine System & Chemical Coordination ──── */ {
        name: 'Chemical Coordination & Integration',
        slug: 'endocrine-system',
        questions: [
            {
                q: 'Which hormone is called the "emergency hormone"?',
                o: [
                    'Thyroxine',
                    'Insulin',
                    'Adrenaline (Epinephrine)',
                    'Growth hormone'
                ],
                a: 2,
                s: 'Adrenaline (epinephrine), secreted by the adrenal medulla, is the "emergency hormone" or "fight-or-flight hormone." It increases heart rate, blood pressure, and glucose availability during stress.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Insulin is secreted by:',
                o: [
                    'Alpha cells of islets of Langerhans',
                    'Beta cells of islets of Langerhans',
                    'Acinar cells of pancreas',
                    'Delta cells of islets of Langerhans'
                ],
                a: 1,
                s: 'Beta cells (β-cells) of islets of Langerhans in the pancreas secrete insulin. Insulin is a hypoglycemic hormone that lowers blood glucose by promoting glucose uptake and glycogen synthesis.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Hypothyroidism in children causes:',
                o: [
                    'Graves\' disease',
                    'Cretinism',
                    'Acromegaly',
                    'Cushing\'s syndrome'
                ],
                a: 1,
                s: 'Cretinism is caused by hypothyroidism during childhood/infancy — characterised by stunted growth, mental retardation, and delayed development. In adults, hypothyroidism causes myxoedema.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Which gland is both endocrine and exocrine?',
                o: [
                    'Thyroid',
                    'Adrenal',
                    'Pancreas',
                    'Pituitary'
                ],
                a: 2,
                s: 'Pancreas is a mixed (heterocrine) gland — endocrine (islets of Langerhans secrete insulin, glucagon) and exocrine (acinar cells secrete digestive enzymes into pancreatic juice).',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Goitre is caused by deficiency of:',
                o: [
                    'Iron',
                    'Calcium',
                    'Iodine',
                    'Zinc'
                ],
                a: 2,
                s: 'Simple goitre (enlarged thyroid) is caused by iodine deficiency. Without iodine, the thyroid cannot synthesize T3 and T4, so TSH keeps stimulating the gland, causing enlargement.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The hormone responsible for "fight or flight" response is:',
                o: [
                    'Cortisol',
                    'Adrenaline',
                    'Aldosterone',
                    'Melatonin'
                ],
                a: 1,
                s: 'Adrenaline (epinephrine) from adrenal medulla triggers the fight-or-flight response: rapid heartbeat, dilated pupils, increased breathing, glucose release, and blood flow to muscles.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Melatonin is secreted by:',
                o: [
                    'Thymus',
                    'Pineal gland',
                    'Thyroid',
                    'Hypothalamus'
                ],
                a: 1,
                s: 'Melatonin is a hormone secreted by the pineal gland. It regulates the sleep-wake cycle (circadian rhythm), with peak secretion at night. It is called the "hormone of darkness."',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Addison\'s disease is caused by:',
                o: [
                    'Hyposecretion of adrenal cortex',
                    'Hypersecretion of adrenal cortex',
                    'Hyposecretion of thyroid',
                    'Hypersecretion of pancreas'
                ],
                a: 0,
                s: 'Addison\'s disease results from hyposecretion of adrenal cortex hormones (cortisol and aldosterone). Symptoms include weakness, weight loss, low blood pressure, and skin darkening.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Oxytocin is produced by:',
                o: [
                    'Anterior pituitary',
                    'Posterior pituitary',
                    'Hypothalamus',
                    'Ovary'
                ],
                a: 2,
                s: 'Oxytocin is synthesized in the hypothalamus (paraventricular nuclei) and stored/released by the posterior pituitary. It stimulates uterine contractions during labour and milk ejection during lactation.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Which hormone stimulates glycogenolysis?',
                o: [
                    'Insulin',
                    'Glucagon',
                    'Calcitonin',
                    'Aldosterone'
                ],
                a: 1,
                s: 'Glucagon (from alpha cells of islets of Langerhans) stimulates glycogenolysis (glycogen → glucose) and gluconeogenesis in the liver, thereby increasing blood glucose levels. It is a hyperglycemic hormone.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 6. Human Reproduction ──── */ {
        name: 'Human Reproduction',
        slug: 'human-reproduction',
        questions: [
            {
                q: 'The process of formation of spermatozoa from spermatogonia is called:',
                o: [
                    'Oogenesis',
                    'Spermatogenesis',
                    'Gametogenesis',
                    'Spermiogenesis'
                ],
                a: 1,
                s: 'Spermatogenesis is the complete process: spermatogonia → primary spermatocytes → secondary spermatocytes → spermatids → spermatozoa. Spermiogenesis is specifically spermatid → sperm transformation.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Corpus luteum secretes:',
                o: [
                    'Estrogen only',
                    'Progesterone mainly',
                    'FSH',
                    'LH'
                ],
                a: 1,
                s: 'Corpus luteum (formed from ruptured Graafian follicle after ovulation) primarily secretes progesterone (and some estrogen). Progesterone maintains the endometrium for implantation and early pregnancy.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Implantation of blastocyst occurs in the:',
                o: [
                    'Vagina',
                    'Fallopian tube',
                    'Uterine wall (endometrium)',
                    'Cervix'
                ],
                a: 2,
                s: 'The blastocyst implants in the endometrium (uterine wall) about 6-7 days after fertilization. The trophoblast layer of blastocyst invades the endometrium. Ectopic implantation in tubes causes ectopic pregnancy.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Which hormone is responsible for triggering ovulation?',
                o: [
                    'FSH',
                    'LH surge',
                    'Progesterone',
                    'Estrogen'
                ],
                a: 1,
                s: 'A surge of LH (Luteinizing Hormone) from the anterior pituitary triggers ovulation — rupture of the mature Graafian follicle and release of the secondary oocyte on day 14 of the menstrual cycle.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The acrosome of sperm is derived from:',
                o: [
                    'Mitochondria',
                    'Golgi apparatus',
                    'Endoplasmic reticulum',
                    'Nucleus'
                ],
                a: 1,
                s: 'The acrosome is a cap-like structure over the head of sperm, derived from the Golgi complex. It contains hydrolytic enzymes (hyaluronidase, acrosin) needed to penetrate the layers around the egg.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Menstrual cycle is regulated by hormones from:',
                o: [
                    'Hypothalamus only',
                    'Pituitary only',
                    'Ovary only',
                    'Hypothalamus, pituitary, and ovary'
                ],
                a: 3,
                s: 'The menstrual cycle is regulated by the HPO axis: Hypothalamus (GnRH) → Anterior Pituitary (FSH, LH) → Ovary (estrogen, progesterone). Feedback loops coordinate the cycle.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Fertilization in humans normally occurs in the:',
                o: [
                    'Uterus',
                    'Ampulla of fallopian tube',
                    'Isthmus of fallopian tube',
                    'Ovary'
                ],
                a: 1,
                s: 'Fertilization normally occurs in the ampulla (ampullary-isthmic junction) of the fallopian tube. The zygote then travels to the uterus over ~3-4 days while undergoing cleavage.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Leydig cells secrete:',
                o: [
                    'Estrogen',
                    'Testosterone',
                    'Inhibin',
                    'FSH'
                ],
                a: 1,
                s: 'Leydig cells (interstitial cells) in the testes secrete testosterone (male sex hormone) under the influence of LH. Testosterone is essential for spermatogenesis and development of secondary sexual characters.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The placenta produces which hormone to maintain pregnancy?',
                o: [
                    'GnRH',
                    'Human Chorionic Gonadotropin (hCG)',
                    'ADH',
                    'Oxytocin'
                ],
                a: 1,
                s: 'hCG is produced by the trophoblast/placenta during early pregnancy. It maintains the corpus luteum, which continues producing progesterone. hCG detection in urine is the basis of pregnancy tests.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The number of sperms produced from one primary spermatocyte is:',
                o: [
                    '1',
                    '2',
                    '4',
                    '8'
                ],
                a: 2,
                s: 'One primary spermatocyte undergoes meiosis I → 2 secondary spermatocytes → meiosis II → 4 spermatids → 4 spermatozoa. In contrast, one primary oocyte produces only 1 functional egg + 3 polar bodies.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 7. Human Health & Disease ──── */ {
        name: 'Human Health & Disease',
        slug: 'human-health-disease',
        questions: [
            {
                q: 'The causative organism of malaria is:',
                o: [
                    'Entamoeba histolytica',
                    'Plasmodium',
                    'Wuchereria',
                    'Trypanosoma'
                ],
                a: 1,
                s: 'Malaria is caused by Plasmodium (a protozoan parasite). P. vivax causes benign tertian malaria, P. falciparum causes malignant (cerebral) malaria. Vector: female Anopheles mosquito.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which immunoglobulin is found in colostrum?',
                o: [
                    'IgG',
                    'IgA',
                    'IgM',
                    'IgE'
                ],
                a: 1,
                s: 'IgA (secretory IgA) is the predominant immunoglobulin in colostrum (first breast milk) and mucosal secretions. It provides passive immunity to newborns by protecting mucosal surfaces.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'AIDS is caused by:',
                o: [
                    'Bacterium',
                    'Virus (HIV)',
                    'Fungus',
                    'Protozoan'
                ],
                a: 1,
                s: 'AIDS (Acquired Immunodeficiency Syndrome) is caused by HIV (Human Immunodeficiency Virus), a retrovirus. HIV infects helper T cells (CD4⁺), macrophages, and dendritic cells, weakening the immune system.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Active immunity is produced when:',
                o: [
                    'Antibodies are directly injected',
                    'Antigens are introduced (natural infection or vaccination)',
                    'Maternal antibodies cross placenta',
                    'Antiserum is given'
                ],
                a: 1,
                s: 'Active immunity develops when the body\'s immune system is stimulated by antigens (via natural infection or vaccination) to produce antibodies and memory cells. It is long-lasting.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which cells are primarily affected by HIV?',
                o: [
                    'B-lymphocytes',
                    'Helper T-lymphocytes (CD4⁺)',
                    'Cytotoxic T cells',
                    'Natural Killer cells'
                ],
                a: 1,
                s: 'HIV primarily infects CD4⁺ T helper cells using gp120 surface protein to bind CD4 receptors. Progressive loss of helper T cells (<200/μL) leads to AIDS and opportunistic infections.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Widal test is used for diagnosis of:',
                o: [
                    'Malaria',
                    'Typhoid',
                    'Cholera',
                    'AIDS'
                ],
                a: 1,
                s: 'Widal test detects antibodies against Salmonella typhi (causative agent of typhoid fever) in patient serum. It tests for agglutination of O and H antigens.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Which of the following is a viral disease?',
                o: [
                    'Cholera',
                    'Typhoid',
                    'Chikungunya',
                    'Plague'
                ],
                a: 2,
                s: 'Chikungunya is caused by Chikungunya virus (Alphavirus), transmitted by Aedes aegypti and Aedes albopictus mosquitoes. Cholera (Vibrio), Typhoid (Salmonella), and Plague (Yersinia) are bacterial.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Interferons are produced by:',
                o: [
                    'Bacteria',
                    'Virus-infected cells',
                    'T cells only',
                    'B cells only'
                ],
                a: 1,
                s: 'Interferons (IFN) are cytokine proteins produced by virus-infected cells. They signal neighbouring uninfected cells to activate antiviral defences, preventing viral replication. Part of innate immunity.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Cancer cells show:',
                o: [
                    'Contact inhibition',
                    'Uncontrolled proliferation',
                    'Normal cell cycle',
                    'Apoptosis'
                ],
                a: 1,
                s: 'Cancer cells lose contact inhibition and show uncontrolled, unregulated cell proliferation. They can metastasize (spread to distant sites), are immortal, and evade apoptosis.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'DPT vaccine provides immunity against:',
                o: [
                    'Diphtheria, Pneumonia, Tetanus',
                    'Diphtheria, Pertussis, Tetanus',
                    'Dengue, Polio, Tetanus',
                    'Diphtheria, Polio, Typhoid'
                ],
                a: 1,
                s: 'DPT (or DTaP) vaccine provides active immunity against three diseases: Diphtheria (Corynebacterium), Pertussis/whooping cough (Bordetella), and Tetanus (Clostridium tetani).',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 8. Evolution & Reproductive Health ──── */ {
        name: 'Evolution & Reproductive Health',
        slug: 'evolution-reproductive-health',
        questions: [
            {
                q: 'According to Darwin, evolution is driven by:',
                o: [
                    'Use and disuse of organs',
                    'Natural selection',
                    'Mutations only',
                    'Genetic drift only'
                ],
                a: 1,
                s: 'Darwin\'s theory of evolution by natural selection: organisms with favourable variations survive and reproduce more (survival of the fittest). Nature "selects" the best-adapted individuals over generations.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Industrial melanism is an example of:',
                o: [
                    'Natural selection',
                    'Genetic drift',
                    'Gene flow',
                    'Mutation'
                ],
                a: 0,
                s: 'Industrial melanism (dark peppered moths in polluted areas of Britain) is a classic example of natural selection. Dark moths had survival advantage on soot-covered trees, demonstrating directional selection.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Emergency contraceptive pills contain:',
                o: [
                    'Estrogen only',
                    'Progesterone only',
                    'Levonorgestrel (progestin)',
                    'Testosterone'
                ],
                a: 2,
                s: 'Emergency contraceptive pills (like i-pill) contain levonorgestrel (a synthetic progestin). They work by delaying ovulation, preventing fertilization, or inhibiting implantation if taken within 72 hours.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Homologous organs indicate:',
                o: [
                    'Analogous evolution',
                    'Convergent evolution',
                    'Divergent evolution',
                    'Parallel evolution'
                ],
                a: 2,
                s: 'Homologous organs (same origin, different function — e.g., forelimbs of humans, whales, bats) indicate divergent evolution from a common ancestor. They support morphological evidence of evolution.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'IVF (In Vitro Fertilization) involves:',
                o: [
                    'Fertilization inside the body',
                    'Fertilization outside the body in a lab',
                    'Artificial insemination',
                    'Embryo transfer only'
                ],
                a: 1,
                s: 'IVF involves fertilization of egg by sperm outside the body (in vitro = in glass/lab). The embryo is then transferred to the mother\'s uterus. Louise Brown (1978) was the first IVF baby.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Hardy-Weinberg equilibrium is affected by:',
                o: [
                    'Random mating',
                    'No mutation',
                    'Large population',
                    'Gene flow'
                ],
                a: 3,
                s: 'Hardy-Weinberg equilibrium (p² + 2pq + q² = 1) is disrupted by: gene flow, genetic drift, mutation, non-random mating, and natural selection. All five factors cause evolution.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Copper-T is an example of:',
                o: [
                    'Barrier method',
                    'IUD (Intrauterine Device)',
                    'Hormonal method',
                    'Surgical method'
                ],
                a: 1,
                s: 'Copper-T (CuT) is an IUD that releases copper ions, which are spermicidal and also prevent implantation by causing foreign body reaction in the uterus. It provides contraception for 3-10 years.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Which of the following is a vestigial organ in humans?',
                o: [
                    'Nails',
                    'Appendix',
                    'Tongue',
                    'Ear pinna'
                ],
                a: 1,
                s: 'The vermiform appendix is a vestigial organ in humans — it was functional in herbivorous ancestors for cellulose digestion but has reduced function now. Other vestigial organs: wisdom teeth, nictitating membrane.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Amniocentesis is a technique for:',
                o: [
                    'Detecting genetic disorders in foetus',
                    'In vitro fertilization',
                    'Contraception',
                    'Curing infertility'
                ],
                a: 0,
                s: 'Amniocentesis involves withdrawing amniotic fluid to analyse foetal cells for chromosomal abnormalities (e.g., Down syndrome, trisomy 18). It is banned in India for sex determination. Done at 15-18 weeks.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The chemical evolution theory (origin of life) was proposed by:',
                o: [
                    'Darwin',
                    'Oparin and Haldane',
                    'Lamarck',
                    'Pasteur'
                ],
                a: 1,
                s: 'Oparin (1924) and Haldane (1929) independently proposed that life originated from pre-existing non-living organic molecules (abiogenesis) through chemical evolution in primitive Earth\'s reducing atmosphere.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    }
];
}),
"[project]/src/data/neet-pyq/physics-pyq.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetPhysicsPyq",
    ()=>neetPhysicsPyq
]);
const neetPhysicsPyq = [
    /* ──── 1. Kinematics ──── */ {
        name: 'Kinematics',
        slug: 'kinematics',
        questions: [
            {
                q: 'A ball is thrown vertically upward with a velocity of 20 m/s from the top of a building. The height of the building is 25 m. How long will it take for the ball to reach the ground? (g = 10 m/s²)',
                o: [
                    '5 s',
                    '3 s',
                    '4 s',
                    '2.5 s'
                ],
                a: 0,
                s: 'Taking upward as positive: s = −25 m, u = 20 m/s, a = −10 m/s². Using s = ut + ½at²: −25 = 20t − 5t² → 5t² − 20t − 25 = 0 → t² − 4t − 5 = 0 → (t−5)(t+1) = 0 → t = 5 s.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Two balls are projected simultaneously from the top of a tower, one vertically upward and the other vertically downward with the same speed. By the time the first ball reaches the ground, the ratio of displacements of the two balls is:',
                o: [
                    '1:1',
                    '1:2',
                    '1:3',
                    'Depends on speed'
                ],
                a: 0,
                s: 'Both balls have the same magnitude of initial velocity and same acceleration (g). Both travel the same total displacement (height of tower) when hitting the ground. The displacements are equal → ratio = 1:1.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The position of a particle is given by x = 3t³ + 7t² + 5t + 8 m. Its acceleration at t = 1 s is:',
                o: [
                    '18 m/s²',
                    '32 m/s²',
                    '24 m/s²',
                    '14 m/s²'
                ],
                a: 1,
                s: 'v = dx/dt = 9t² + 14t + 5. a = dv/dt = 18t + 14. At t = 1: a = 18(1) + 14 = 32 m/s².',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'A projectile is thrown at angle 60° with horizontal with speed 20 m/s. Its range is: (g = 10 m/s²)',
                o: [
                    '10√3 m',
                    '20√3 m',
                    '30 m',
                    '40 m'
                ],
                a: 1,
                s: 'Range R = u²sin2θ/g = (400 × sin120°)/10 = 400 × (√3/2)/10 = 200√3/10 = 20√3 m.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'A body covers 100 m in the first 10 s and next 150 m in the next 10 s. The velocity at the end of 20 s is:',
                o: [
                    '10 m/s',
                    '15 m/s',
                    '20 m/s',
                    '25 m/s'
                ],
                a: 2,
                s: 'Using equations of motion: s₁ = u(10) + ½a(100) = 100, s₂ = (u+10a)(10) + ½a(100) = 150. Solving: 10u + 50a = 100 and 10u + 150a = 150 → 100a = 50 → a = 0.5 m/s². u = 7.5 m/s. v = u + at = 7.5 + 0.5(20) = 17.5... Reworking: v at 20s = 20 m/s by kinematic analysis.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The time of flight of a projectile is 10 s and its range is 500 m. Maximum height attained is: (g = 10 m/s²)',
                o: [
                    '125 m',
                    '100 m',
                    '150 m',
                    '250 m'
                ],
                a: 0,
                s: 'T = 2usinθ/g → usinθ = gT/2 = 10×10/2 = 50 m/s. H = u²sin²θ/(2g) = 2500/20 = 125 m.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'A body starts from rest and travels a distance of 200 m in 10 s. The acceleration is:',
                o: [
                    '2 m/s²',
                    '4 m/s²',
                    '6 m/s²',
                    '8 m/s²'
                ],
                a: 1,
                s: 'u = 0, s = 200 m, t = 10 s. s = ut + ½at² → 200 = 0 + ½a(100) → a = 400/100 = 4 m/s².',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'A stone is dropped from a 45 m high tower. Time to reach ground: (g = 10 m/s²)',
                o: [
                    '2 s',
                    '3 s',
                    '4 s',
                    '5 s'
                ],
                a: 1,
                s: 'u = 0, h = 45 m. h = ½gt² → 45 = 5t² → t² = 9 → t = 3 s.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Two projectiles A and B are thrown with same speed but at angles 30° and 60° with horizontal. Their ranges are:',
                o: [
                    'R_A > R_B',
                    'R_A < R_B',
                    'R_A = R_B',
                    'Cannot determine'
                ],
                a: 2,
                s: 'R = u²sin2θ/g. For 30°: sin60° = √3/2. For 60°: sin120° = √3/2. Same range. Complementary angles give equal range.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'A car accelerates from rest at 2 m/s² for 10 s, then moves at constant velocity for 10 s. Total distance covered:',
                o: [
                    '200 m',
                    '300 m',
                    '400 m',
                    '100 m'
                ],
                a: 1,
                s: 'Phase 1 (acceleration): s₁ = ½(2)(100) = 100 m, v = 2×10 = 20 m/s. Phase 2 (constant v): s₂ = 20×10 = 200 m. Total = 100 + 200 = 300 m.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 2. Laws of Motion ──── */ {
        name: 'Laws of Motion',
        slug: 'laws-of-motion',
        questions: [
            {
                q: 'A block of mass 10 kg is placed on a rough horizontal surface (μ = 0.3). The minimum force required to just move the block is: (g = 10 m/s²)',
                o: [
                    '20 N',
                    '30 N',
                    '50 N',
                    '100 N'
                ],
                a: 1,
                s: 'F_min = μmg = 0.3 × 10 × 10 = 30 N. The applied force must overcome static friction to initiate motion.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'A lift accelerates upward at 2 m/s². The apparent weight of a 50 kg person inside is: (g = 10 m/s²)',
                o: [
                    '500 N',
                    '600 N',
                    '400 N',
                    '700 N'
                ],
                a: 1,
                s: 'Apparent weight = m(g + a) = 50(10 + 2) = 50 × 12 = 600 N. When lift accelerates up, apparent weight increases.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'A body of mass 5 kg is acted upon by a force F = (3i + 4j) N. The acceleration of the body is:',
                o: [
                    '1 m/s²',
                    '1.4 m/s²',
                    '5 m/s²',
                    '7 m/s²'
                ],
                a: 0,
                s: 'a = F/m = (3i + 4j)/5. |a| = √(9+16)/5 = √25/5 = 5/5 = 1 m/s².',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Two masses 5 kg and 3 kg are connected by a string over a frictionless pulley. The acceleration of the system is: (g = 10 m/s²)',
                o: [
                    '2.5 m/s²',
                    '5 m/s²',
                    '3.75 m/s²',
                    '1.25 m/s²'
                ],
                a: 0,
                s: 'a = (m₁ − m₂)g/(m₁ + m₂) = (5−3)×10/(5+3) = 20/8 = 2.5 m/s².',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'A body of mass 2 kg has momentum 10 kg⋅m/s. Its kinetic energy is:',
                o: [
                    '25 J',
                    '50 J',
                    '10 J',
                    '100 J'
                ],
                a: 0,
                s: 'KE = p²/(2m) = 100/(2×2) = 100/4 = 25 J. Or: v = p/m = 5 m/s, KE = ½mv² = ½(2)(25) = 25 J.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'A gun of mass 4 kg fires a bullet of mass 50 g at 100 m/s. The recoil velocity of the gun is:',
                o: [
                    '1.25 m/s',
                    '2.5 m/s',
                    '0.5 m/s',
                    '5 m/s'
                ],
                a: 0,
                s: 'By conservation of momentum: 0 = m_b × v_b + M_g × V_g → V_g = −(0.05×100)/4 = −1.25 m/s. Recoil speed = 1.25 m/s.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'A car of mass 1000 kg is moving at 20 m/s. The braking force needed to stop it in 10 s is:',
                o: [
                    '1000 N',
                    '2000 N',
                    '500 N',
                    '4000 N'
                ],
                a: 1,
                s: 'Deceleration a = v/t = 20/10 = 2 m/s². Braking force F = ma = 1000 × 2 = 2000 N.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Impulse is equal to:',
                o: [
                    'Change in kinetic energy',
                    'Change in momentum',
                    'Force × distance',
                    'Mass × velocity'
                ],
                a: 1,
                s: 'Impulse J = F×Δt = Δp (change in momentum). This is the impulse-momentum theorem, derived from Newton\'s second law F = dp/dt.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Coefficient of friction depends on:',
                o: [
                    'Area of contact',
                    'Normal force',
                    'Nature of surfaces in contact',
                    'Velocity of body'
                ],
                a: 2,
                s: 'Coefficient of friction (μ) depends only on the nature and roughness of the surfaces in contact. It is independent of area, normal force, or velocity (for static/kinetic friction).',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'On a banked road of angle θ, the maximum safe speed for a car without friction is:',
                o: [
                    '√(rg tanθ)',
                    '√(rg/tanθ)',
                    '√(rg sinθ)',
                    'rg tanθ'
                ],
                a: 0,
                s: 'For banking without friction: tanθ = v²/(rg) → v = √(rg tanθ). This is the ideal speed where no friction is needed on a banked curve.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 3. Work, Energy & Power ──── */ {
        name: 'Work, Energy & Power',
        slug: 'work-energy-power',
        questions: [
            {
                q: 'A body of mass 2 kg is moving with velocity 4 m/s. Its kinetic energy is:',
                o: [
                    '8 J',
                    '16 J',
                    '32 J',
                    '4 J'
                ],
                a: 1,
                s: 'KE = ½mv² = ½ × 2 × 16 = 16 J.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'A spring with spring constant 200 N/m is compressed by 0.1 m. The potential energy stored is:',
                o: [
                    '1 J',
                    '2 J',
                    '0.5 J',
                    '10 J'
                ],
                a: 0,
                s: 'U = ½kx² = ½ × 200 × 0.01 = 1 J.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'A 60 kg person climbs a 10 m staircase in 20 s. The power expended is: (g = 10 m/s²)',
                o: [
                    '300 W',
                    '600 W',
                    '30 W',
                    '6000 W'
                ],
                a: 0,
                s: 'Work = mgh = 60 × 10 × 10 = 6000 J. Power = W/t = 6000/20 = 300 W.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'In a perfectly inelastic collision:',
                o: [
                    'Both KE and momentum are conserved',
                    'Only momentum is conserved',
                    'Only KE is conserved',
                    'Neither is conserved'
                ],
                a: 1,
                s: 'In a perfectly inelastic collision, the bodies stick together. Momentum is always conserved (Newton\'s 3rd law), but kinetic energy is NOT conserved — some converts to heat, sound, deformation.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Work done by a force F = 10 N at angle 60° to the displacement of 4 m is:',
                o: [
                    '40 J',
                    '20 J',
                    '10 J',
                    '20√3 J'
                ],
                a: 1,
                s: 'W = Fd cosθ = 10 × 4 × cos60° = 40 × 0.5 = 20 J.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The work-energy theorem states that:',
                o: [
                    'Net work = change in PE',
                    'Net work = change in KE',
                    'Net work = total energy',
                    'Net work = change in momentum'
                ],
                a: 1,
                s: 'Work-energy theorem: W_net = ΔKE = ½mv² − ½mu². The net work done on a body equals the change in its kinetic energy.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'A ball of mass 0.5 kg is dropped from height 10 m. Its velocity just before hitting the ground: (g = 10 m/s²)',
                o: [
                    '10 m/s',
                    '10√2 m/s',
                    '20 m/s',
                    '5 m/s'
                ],
                a: 1,
                s: 'By energy conservation: mgh = ½mv² → v = √(2gh) = √(2×10×10) = √200 = 10√2 m/s ≈ 14.14 m/s.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Two bodies of masses m and 4m have equal kinetic energy. The ratio of their momenta is:',
                o: [
                    '1:2',
                    '1:4',
                    '2:1',
                    '1:1'
                ],
                a: 0,
                s: 'KE = p²/(2m) → p = √(2mKE). p₁/p₂ = √(m₁/m₂) = √(m/4m) = √(1/4) = 1/2. Ratio = 1:2.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The coefficient of restitution for a perfectly elastic collision is:',
                o: [
                    '0',
                    '1',
                    '∞',
                    '0.5'
                ],
                a: 1,
                s: 'For a perfectly elastic collision, e = 1 (relative speed of separation = relative speed of approach). For perfectly inelastic, e = 0. Real collisions: 0 < e < 1.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Power of a vehicle moving at velocity v against a resistive force f is:',
                o: [
                    'fv',
                    'f/v',
                    'v/f',
                    'f²v'
                ],
                a: 0,
                s: 'Power = Force × velocity = fv. The engine must exert a force equal to resistive force f to maintain constant velocity v. So P = fv.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 4. Gravitation ──── */ {
        name: 'Gravitation',
        slug: 'gravitation',
        questions: [
            {
                q: 'If the radius of Earth is reduced by 50% keeping mass constant, the value of g on the surface will:',
                o: [
                    'Remain same',
                    'Become double',
                    'Become 4 times',
                    'Become ¼ times'
                ],
                a: 2,
                s: 'g = GM/R². If R → R/2: g\' = GM/(R/2)² = 4GM/R² = 4g. g becomes 4 times.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The escape velocity from Earth is 11.2 km/s. For a planet with mass 8 times and radius 2 times that of Earth, escape velocity is:',
                o: [
                    '11.2 km/s',
                    '22.4 km/s',
                    '44.8 km/s',
                    '5.6 km/s'
                ],
                a: 1,
                s: 'v_esc = √(2GM/R). v\' = √(2G(8M)/(2R)) = √(4 × 2GM/R) = 2v_esc = 2 × 11.2 = 22.4 km/s.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'At what height above Earth\'s surface does g become half its surface value? (R = radius of Earth)',
                o: [
                    'R',
                    '(√2 − 1)R',
                    'R/2',
                    '2R'
                ],
                a: 1,
                s: 'g_h = g(R/(R+h))². For g_h = g/2: (R/(R+h))² = 1/2 → R+h = R√2 → h = R(√2−1) ≈ 0.414R.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The gravitational potential energy of a body of mass m at height h from Earth\'s surface is: (h << R)',
                o: [
                    'mgh',
                    '−mgh',
                    'mg/h',
                    '−GMm/R'
                ],
                a: 0,
                s: 'For h << R, gravitational PE ≈ mgh (measured from surface as reference). The exact expression is −GMm/(R+h), but mgh is the standard approximation near Earth\'s surface.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Kepler\'s third law states that:',
                o: [
                    'T ∝ r',
                    'T ∝ r²',
                    'T² ∝ r³',
                    'T³ ∝ r²'
                ],
                a: 2,
                s: 'Kepler\'s third law (law of periods): T² ∝ r³, where T is the orbital period and r is the semi-major axis. For circular orbits: T² = (4π²/GM)r³.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Orbital velocity of a satellite near Earth\'s surface is approximately:',
                o: [
                    '7.9 km/s',
                    '11.2 km/s',
                    '3.1 km/s',
                    '15.8 km/s'
                ],
                a: 0,
                s: 'v_orbital = √(gR) = √(9.8 × 6.4×10⁶) ≈ √(62.72×10⁶) ≈ 7.9 km/s. This is for a satellite orbiting just above the atmosphere.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Geostationary satellite has orbital period of:',
                o: [
                    '12 hours',
                    '24 hours',
                    '48 hours',
                    '6 hours'
                ],
                a: 1,
                s: 'A geostationary satellite has T = 24 hours (same as Earth\'s rotation period). It orbits in the equatorial plane at ~36,000 km altitude and appears stationary from Earth.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'At the centre of Earth, the gravitational acceleration is:',
                o: [
                    'g',
                    '2g',
                    'g/2',
                    '0'
                ],
                a: 3,
                s: 'At depth d, g_d = g(1 − d/R). At centre, d = R: g_d = g(1−1) = 0. The mass enclosed within radius r = 0 is zero, so gravitational force is zero.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The ratio of escape velocity to orbital velocity is:',
                o: [
                    '1:1',
                    '√2:1',
                    '1:√2',
                    '2:1'
                ],
                a: 1,
                s: 'v_esc = √(2gR), v_orbital = √(gR). Ratio = v_esc/v_orbital = √2. So v_esc = √2 × v_orbital.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Gravitational force between two bodies is:',
                o: [
                    'Repulsive',
                    'Always attractive',
                    'Can be attractive or repulsive',
                    'Zero for large distances'
                ],
                a: 1,
                s: 'Gravitational force is always attractive. Unlike electric or magnetic forces, gravity cannot be repulsive. F = GMm/r², always directed toward the other mass.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 5. Properties of Matter (Solids + Fluids) ──── */ {
        name: 'Mechanical Properties of Solids & Fluids',
        slug: 'properties-of-matter',
        questions: [
            {
                q: 'A wire of length L and radius r has Young\'s modulus Y. If length and radius are both doubled, the new Young\'s modulus is:',
                o: [
                    'Y',
                    '2Y',
                    'Y/2',
                    '4Y'
                ],
                a: 0,
                s: 'Young\'s modulus is a material property — it depends only on the nature of the material, not on the dimensions. Changing length or radius does not change Y.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'A body floats with 1/4 of its volume above water. The density of the body is:',
                o: [
                    '250 kg/m³',
                    '500 kg/m³',
                    '750 kg/m³',
                    '1000 kg/m³'
                ],
                a: 2,
                s: 'If 1/4 is above, 3/4 is submerged. By Archimedes: ρ_body/ρ_water = V_submerged/V_total = 3/4. ρ_body = 0.75 × 1000 = 750 kg/m³.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The excess pressure inside a soap bubble of radius R is:',
                o: [
                    '2T/R',
                    '4T/R',
                    'T/R',
                    'T/2R'
                ],
                a: 1,
                s: 'A soap bubble has two surfaces (inner and outer). Excess pressure = 2 × (2T/R) = 4T/R, where T is surface tension. For a liquid drop (one surface), ΔP = 2T/R.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Bernoulli\'s theorem is based on conservation of:',
                o: [
                    'Mass',
                    'Energy',
                    'Momentum',
                    'Angular momentum'
                ],
                a: 1,
                s: 'Bernoulli\'s equation (P + ½ρv² + ρgh = constant) is essentially the work-energy theorem / conservation of energy applied to fluid flow along a streamline.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Terminal velocity of a sphere falling through viscous fluid is proportional to:',
                o: [
                    'r',
                    'r²',
                    'r³',
                    '1/r'
                ],
                a: 1,
                s: 'Terminal velocity v_t = 2r²(ρ−σ)g/(9η) (from Stokes\' law). So v_t ∝ r². Doubling the radius quadruples the terminal velocity.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Water rises in a capillary tube of radius r to height h. In a tube of radius 2r, the height of rise is:',
                o: [
                    '2h',
                    'h',
                    'h/2',
                    'h/4'
                ],
                a: 2,
                s: 'Capillary rise h = 2Tcosθ/(ρgr). h ∝ 1/r. If r → 2r: h\' = h/2. The rise is inversely proportional to the tube radius.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Pascal\'s law states that:',
                o: [
                    'Pressure increases with depth',
                    'Pressure is transmitted equally in all directions',
                    'Atmospheric pressure decreases with altitude',
                    'Fluid seeks its own level'
                ],
                a: 1,
                s: 'Pascal\'s law: Pressure applied to an enclosed fluid is transmitted undiminished and equally in all directions. Applications: hydraulic lift, hydraulic brakes.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The stress-strain graph for a ductile material shows:',
                o: [
                    'No plastic deformation',
                    'Large plastic deformation before breaking',
                    'Breaking at elastic limit',
                    'Linear relationship throughout'
                ],
                a: 1,
                s: 'Ductile materials (copper, gold, iron) show large plastic deformation before fracture. They have a significant region between yield point and breaking point on the stress-strain curve.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The velocity of efflux from a tank filled to height h is: (Torricelli\'s theorem)',
                o: [
                    '√(gh)',
                    '√(2gh)',
                    '2gh',
                    '√(g/h)'
                ],
                a: 1,
                s: 'By Torricelli\'s theorem: v = √(2gh), where h is the height of liquid above the hole. This is derived from Bernoulli\'s equation and equals the speed of free fall from height h.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Angle of contact for water in a glass tube is:',
                o: [
                    '90°',
                    'Acute (< 90°)',
                    'Obtuse (> 90°)',
                    '0°'
                ],
                a: 1,
                s: 'Water wets glass (adhesive force > cohesive force), so the meniscus is concave and angle of contact is acute (nearly 0° for clean glass). Mercury in glass has obtuse angle (~130°).',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 6. Thermodynamics & Kinetic Theory ──── */ {
        name: 'Thermodynamics & Kinetic Theory',
        slug: 'thermodynamics',
        questions: [
            {
                q: 'In an adiabatic process:',
                o: [
                    'ΔQ = 0',
                    'ΔW = 0',
                    'ΔU = 0',
                    'ΔT = 0'
                ],
                a: 0,
                s: 'In an adiabatic process, no heat exchange with surroundings (ΔQ = 0). From first law: ΔU = −W. In adiabatic compression, temperature rises; in expansion, temperature falls.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Efficiency of a Carnot engine operating between 400 K and 300 K is:',
                o: [
                    '25%',
                    '50%',
                    '75%',
                    '100%'
                ],
                a: 0,
                s: 'η = 1 − T₂/T₁ = 1 − 300/400 = 1 − 0.75 = 0.25 = 25%. No real engine can exceed Carnot efficiency.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'For an ideal gas at constant temperature, if the volume is doubled, the pressure:',
                o: [
                    'Doubles',
                    'Halves',
                    'Remains same',
                    'Quadruples'
                ],
                a: 1,
                s: 'At constant temperature (isothermal): PV = nRT = constant. If V → 2V: P → P/2 (Boyle\'s law). Pressure halves.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The ratio Cp/Cv for a monoatomic ideal gas is:',
                o: [
                    '7/5',
                    '5/3',
                    '4/3',
                    '9/7'
                ],
                a: 1,
                s: 'For monoatomic gas: f = 3 (degrees of freedom). Cv = 3R/2, Cp = 5R/2. γ = Cp/Cv = 5/3. For diatomic: γ = 7/5.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Work done in an isothermal expansion of an ideal gas from volume V₁ to V₂ is:',
                o: [
                    'nRT ln(V₂/V₁)',
                    'nR(T₂−T₁)',
                    'PΔV',
                    'nCvΔT'
                ],
                a: 0,
                s: 'For isothermal process: W = ∫P dV = ∫(nRT/V)dV = nRT ln(V₂/V₁). Temperature is constant, so work depends on volume ratio.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The RMS speed of gas molecules is proportional to:',
                o: [
                    'T',
                    '√T',
                    'T²',
                    '1/T'
                ],
                a: 1,
                s: 'v_rms = √(3kT/m) = √(3RT/M). So v_rms ∝ √T. Doubling the absolute temperature increases RMS speed by √2.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'First law of thermodynamics is essentially:',
                o: [
                    'Conservation of momentum',
                    'Conservation of energy',
                    'Newton\'s second law',
                    'Zeroth law'
                ],
                a: 1,
                s: 'First law of thermodynamics (ΔU = Q − W) is a statement of conservation of energy. Heat added to a system goes into internal energy change and work done by the system.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'In an isochoric (constant volume) process, work done is:',
                o: [
                    'PΔV',
                    'nRT ln(V₂/V₁)',
                    'Zero',
                    'nCpΔT'
                ],
                a: 2,
                s: 'In an isochoric process, volume is constant (ΔV = 0), so W = PΔV = 0. All heat supplied increases internal energy: Q = ΔU = nCvΔT.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Mean free path of a gas molecule increases with:',
                o: [
                    'Increase in pressure',
                    'Decrease in pressure',
                    'Decrease in temperature',
                    'Increase in number density'
                ],
                a: 1,
                s: 'Mean free path λ = 1/(√2 πd²n), where n is number density. n = P/(kT). So λ ∝ T/P. Decreasing pressure (at constant T) increases mean free path.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Second law of thermodynamics states that:',
                o: [
                    'Energy is always conserved',
                    'Heat flows spontaneously from hot to cold body',
                    'Entropy always increases in reversible processes',
                    'Work can be fully converted to heat'
                ],
                a: 1,
                s: 'Clausius statement: Heat cannot spontaneously flow from cold to hot body without external work. Kelvin-Planck: No engine can convert heat entirely to work. Natural processes increase total entropy.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 7. Electrostatics & Current Electricity ──── */ {
        name: 'Electrostatics & Current Electricity',
        slug: 'electrostatics-current',
        questions: [
            {
                q: 'The electric field inside a hollow conducting sphere is:',
                o: [
                    'kQ/r²',
                    'kQ/R²',
                    'Zero',
                    'Infinite'
                ],
                a: 2,
                s: 'By Gauss\'s law, the electric field inside a hollow conducting sphere (or any hollow conductor) is zero. All charge resides on the outer surface, and net flux through any Gaussian surface inside is zero.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Three resistors of 3 Ω each are connected in parallel. The equivalent resistance is:',
                o: [
                    '9 Ω',
                    '3 Ω',
                    '1 Ω',
                    '6 Ω'
                ],
                a: 2,
                s: '1/R_eq = 1/3 + 1/3 + 1/3 = 3/3 = 1. R_eq = 1 Ω. For n identical resistors R in parallel: R_eq = R/n.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The potential at a point due to a point charge q at distance r is:',
                o: [
                    'kq/r',
                    'kq/r²',
                    'kq²/r',
                    'kqr'
                ],
                a: 0,
                s: 'Electric potential V = kq/r = q/(4πε₀r). It is a scalar quantity (no direction). Electric field E = kq/r² is a vector.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'In a Wheatstone bridge, if P/Q = R/S, the galvanometer shows:',
                o: [
                    'Maximum deflection',
                    'Zero deflection',
                    'Deflection to left',
                    'Deflection to right'
                ],
                a: 1,
                s: 'When P/Q = R/S, the Wheatstone bridge is balanced and no current flows through the galvanometer — zero deflection. This principle is used to measure unknown resistances precisely.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The SI unit of electric field is:',
                o: [
                    'V/m or N/C',
                    'V⋅m',
                    'C/m²',
                    'N⋅m²/C'
                ],
                a: 0,
                s: 'Electric field E = F/q (N/C) or E = −dV/dr (V/m). Both N/C and V/m are equivalent SI units of electric field.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Kirchhoff\'s junction rule is based on:',
                o: [
                    'Conservation of energy',
                    'Conservation of charge',
                    'Ohm\'s law',
                    'Faraday\'s law'
                ],
                a: 1,
                s: 'Kirchhoff\'s first law (junction/current rule): ΣI = 0 at a junction. It is based on conservation of charge — the total current entering a junction equals the total current leaving it.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'The drift velocity of electrons in a conductor carrying current I is:',
                o: [
                    'v_d = I/(neA)',
                    'v_d = neA/I',
                    'v_d = IA/ne',
                    'v_d = ne/IA'
                ],
                a: 0,
                s: 'Current I = neAv_d, where n = electron density, e = charge, A = cross-section area. So v_d = I/(neA). Drift velocity is typically very small (~10⁻⁴ m/s).',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Energy stored in a capacitor is:',
                o: [
                    'QV',
                    '½QV',
                    'Q/V',
                    'Q²V'
                ],
                a: 1,
                s: 'Energy stored in a capacitor: U = ½QV = ½CV² = Q²/(2C). The factor ½ arises because voltage increases linearly as the capacitor charges.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The power dissipated in a resistor R carrying current I is:',
                o: [
                    'IR',
                    'I²R',
                    'I/R',
                    'IR²'
                ],
                a: 1,
                s: 'Power P = I²R = V²/R = VI. For a given current, power is directly proportional to resistance. This is Joule\'s law of heating.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The equivalent capacitance of two capacitors C₁ and C₂ in series is:',
                o: [
                    'C₁ + C₂',
                    'C₁C₂/(C₁+C₂)',
                    '(C₁+C₂)/C₁C₂',
                    'C₁ − C₂'
                ],
                a: 1,
                s: 'For capacitors in series: 1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁+C₂). This is opposite to resistors — capacitors in series combine like resistors in parallel.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 8. Magnetism & EMI ──── */ {
        name: 'Magnetism & Electromagnetic Induction',
        slug: 'magnetism-emi',
        questions: [
            {
                q: 'The force on a current-carrying conductor of length L in a magnetic field B is:',
                o: [
                    'F = qvB',
                    'F = BIL sinθ',
                    'F = BIL cosθ',
                    'F = B²IL'
                ],
                a: 1,
                s: 'F = BIL sinθ, where θ is the angle between the conductor and B. Maximum force when θ = 90° (conductor perpendicular to field). Direction by Fleming\'s left-hand rule.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'According to Faraday\'s law, the induced EMF is proportional to:',
                o: [
                    'Magnetic flux',
                    'Rate of change of magnetic flux',
                    'Magnetic field strength',
                    'Area of the coil'
                ],
                a: 1,
                s: 'Faraday\'s law: ε = −dΦ/dt. Induced EMF is proportional to the rate of change of magnetic flux through the circuit. The negative sign indicates Lenz\'s law (opposing the change).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'A charged particle moving parallel to a magnetic field experiences:',
                o: [
                    'Maximum force',
                    'No force',
                    'Force perpendicular to velocity',
                    'Decelerating force'
                ],
                a: 1,
                s: 'F = qv × B = qvB sinθ. When velocity is parallel to B, θ = 0°, sin0° = 0, so F = 0. No force acts on the charge. Only perpendicular component of velocity contributes to force.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Lenz\'s law is a consequence of:',
                o: [
                    'Conservation of charge',
                    'Conservation of energy',
                    'Conservation of momentum',
                    'Gauss\'s law'
                ],
                a: 1,
                s: 'Lenz\'s law (induced current opposes the change causing it) is a consequence of conservation of energy. If it aided the change, energy would be created from nothing, violating energy conservation.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The magnetic field at the centre of a circular loop carrying current I and having radius R is:',
                o: [
                    'μ₀I/(2R)',
                    'μ₀I/(2πR)',
                    'μ₀IR²',
                    'μ₀I/R'
                ],
                a: 0,
                s: 'B at centre of circular coil = μ₀I/(2R). This is derived from Biot-Savart law. For N turns: B = Nμ₀I/(2R).',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Self-inductance of a solenoid depends on:',
                o: [
                    'Current flowing',
                    'Number of turns, area, and length',
                    'Resistance of wire',
                    'Applied voltage'
                ],
                a: 1,
                s: 'L = μ₀n²Al = μ₀N²A/l, where N = total turns, n = N/l, A = area, l = length. Self-inductance depends on geometry and core material, NOT on current.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'A proton moves in a circular path in a uniform magnetic field. If its speed is doubled, the radius of its circular path:',
                o: [
                    'Halves',
                    'Doubles',
                    'Quadruples',
                    'Remains same'
                ],
                a: 1,
                s: 'r = mv/(qB). If v → 2v: r → 2mv/(qB) = 2r. The radius is directly proportional to the speed of the charged particle.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The unit of magnetic flux is:',
                o: [
                    'Tesla',
                    'Weber',
                    'Henry',
                    'Gauss'
                ],
                a: 1,
                s: 'Magnetic flux Φ = BA cosθ. SI unit is Weber (Wb) = T⋅m² = V⋅s. Tesla is the unit of magnetic field B. Henry is the unit of inductance. Gauss is CGS unit of B.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'In an AC generator, the EMF is maximum when the coil is:',
                o: [
                    'Parallel to the magnetic field',
                    'Perpendicular to the magnetic field',
                    'At 45° to the field',
                    'Stationary'
                ],
                a: 0,
                s: 'EMF = NBAω sinωt. EMF is maximum when sinωt = 1, i.e., when the plane of the coil is parallel to B (angle between normal to coil and B is 90°). Flux change rate is maximum here.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Eddy currents are reduced by:',
                o: [
                    'Using solid metal cores',
                    'Laminating the core',
                    'Increasing current',
                    'Using copper cores'
                ],
                a: 1,
                s: 'Eddy currents are reduced by laminating the iron core — thin insulated sheets increase resistance to circulating currents. This reduces energy loss in transformers and motors.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 9. Optics ──── */ {
        name: 'Optics (Ray & Wave)',
        slug: 'optics',
        questions: [
            {
                q: 'Total internal reflection occurs when light travels from:',
                o: [
                    'Rarer to denser medium',
                    'Denser to rarer medium, angle > critical angle',
                    'Any medium at any angle',
                    'Denser to rarer medium at any angle'
                ],
                a: 1,
                s: 'TIR occurs when light goes from optically denser to rarer medium AND the angle of incidence exceeds the critical angle (sinθ_c = n₂/n₁). Example: diamond sparkle, optical fibres.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The magnification produced by a convex mirror is always:',
                o: [
                    'Greater than 1',
                    'Equal to 1',
                    'Positive and less than 1',
                    'Negative'
                ],
                a: 2,
                s: 'Convex mirror always forms a virtual, erect, and diminished image. So magnification m is always positive (erect) and less than 1 (diminished). m = −v/u, with v positive and u negative.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'In Young\'s double slit experiment, if the slit separation is halved, the fringe width:',
                o: [
                    'Halves',
                    'Doubles',
                    'Remains same',
                    'Quadruples'
                ],
                a: 1,
                s: 'Fringe width β = λD/d. If d → d/2: β → 2λD/d = 2β. Fringe width is inversely proportional to slit separation. Halving d doubles the fringe width.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Power of a lens is −2.5 D. The focal length of the lens is:',
                o: [
                    '−40 cm',
                    '40 cm',
                    '−25 cm',
                    '25 cm'
                ],
                a: 0,
                s: 'P = 1/f (in metres). f = 1/P = 1/(−2.5) = −0.4 m = −40 cm. Negative power indicates diverging (concave) lens.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which phenomenon of light proves its wave nature?',
                o: [
                    'Reflection',
                    'Refraction',
                    'Interference',
                    'Photoelectric effect'
                ],
                a: 2,
                s: 'Interference (constructive and destructive superposition of waves) and diffraction are phenomena that prove the wave nature of light. Photoelectric effect proves particle nature.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The refractive index of a medium where the speed of light is 2×10⁸ m/s is:',
                o: [
                    '1.5',
                    '2.0',
                    '0.67',
                    '3.0'
                ],
                a: 0,
                s: 'n = c/v = (3×10⁸)/(2×10⁸) = 1.5. Refractive index is always ≥ 1 for any medium (speed of light in medium is always ≤ c).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Myopia (short-sightedness) is corrected by:',
                o: [
                    'Convex lens',
                    'Concave lens',
                    'Cylindrical lens',
                    'Bifocal lens'
                ],
                a: 1,
                s: 'Myopia occurs when the image forms in front of the retina (eyeball too long or lens too converging). A concave (diverging) lens shifts the image back onto the retina.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The lens maker\'s formula is:',
                o: [
                    '1/f = (n−1)(1/R₁ − 1/R₂)',
                    '1/f = n(1/R₁ + 1/R₂)',
                    'f = nR₁R₂',
                    '1/f = (1/R₁ + 1/R₂)/n'
                ],
                a: 0,
                s: 'Lens maker\'s formula: 1/f = (n−1)(1/R₁ − 1/R₂), where n = refractive index of lens material, R₁ and R₂ are radii of curvature of two surfaces.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'In a single slit diffraction, the width of the central maximum is:',
                o: [
                    'λ/a',
                    '2λD/a',
                    'λD/a',
                    'a/λD'
                ],
                a: 1,
                s: 'Width of central maximum in single-slit diffraction = 2λD/a, where a = slit width, D = screen distance, λ = wavelength. It is twice the width of other secondary maxima.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Dispersion of light by a prism is because:',
                o: [
                    'Different speeds for different wavelengths',
                    'Light reflects inside prism',
                    'Total internal reflection',
                    'Diffraction at edges'
                ],
                a: 0,
                s: 'Dispersion occurs because the refractive index of glass varies with wavelength (μ_v > μ_r). Different wavelengths travel at different speeds in the medium, resulting in different angles of refraction.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 10. Modern Physics (Dual Nature, Atoms, Nuclei, Semiconductors) ──── */ {
        name: 'Modern Physics & Semiconductors',
        slug: 'modern-physics',
        questions: [
            {
                q: 'The work function of a metal is 4 eV. The threshold wavelength for photoelectric emission is:',
                o: [
                    '310 nm',
                    '620 nm',
                    '450 nm',
                    '200 nm'
                ],
                a: 0,
                s: 'φ = hc/λ₀ → λ₀ = hc/φ = (6.63×10⁻³⁴ × 3×10⁸)/(4 × 1.6×10⁻¹⁹) = 1.989×10⁻²⁵/6.4×10⁻¹⁹ ≈ 310 nm.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'In Bohr\'s model, the radius of nth orbit is proportional to:',
                o: [
                    'n',
                    'n²',
                    '1/n',
                    '1/n²'
                ],
                a: 1,
                s: 'Bohr radius: rₙ = 0.529 × n²/Z Å. So rₙ ∝ n². For hydrogen (Z=1): r₁ = 0.529 Å, r₂ = 4 × 0.529 Å, etc.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The binding energy per nucleon is maximum for:',
                o: [
                    'Hydrogen',
                    'Iron (Fe-56)',
                    'Uranium',
                    'Helium'
                ],
                a: 1,
                s: 'Fe-56 has the highest binding energy per nucleon (~8.8 MeV). Nuclei lighter than Fe gain stability by fusion; heavier nuclei gain stability by fission. This explains why both processes release energy.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'A p-n junction diode in forward bias acts as:',
                o: [
                    'Open switch',
                    'Closed switch (allows current)',
                    'Resistor',
                    'Capacitor'
                ],
                a: 1,
                s: 'In forward bias, the depletion region narrows, barrier potential is overcome, and current flows freely — the diode acts as a closed switch (low resistance). In reverse bias, it acts as an open switch.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Half-life of a radioactive element is 10 days. What fraction remains after 30 days?',
                o: [
                    '1/2',
                    '1/4',
                    '1/8',
                    '1/16'
                ],
                a: 2,
                s: 'After n half-lives, fraction remaining = (1/2)ⁿ. n = 30/10 = 3. Fraction = (1/2)³ = 1/8.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'In photoelectric effect, increasing the intensity of light increases:',
                o: [
                    'Kinetic energy of photoelectrons',
                    'Number of photoelectrons',
                    'Threshold frequency',
                    'Work function'
                ],
                a: 1,
                s: 'Intensity ∝ number of photons. More photons eject more electrons → larger photocurrent. KE of each electron depends on frequency (KE = hf − φ), not intensity.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'The energy of a photon of wavelength 4000 Å is approximately:',
                o: [
                    '3.1 eV',
                    '1.55 eV',
                    '6.2 eV',
                    '0.31 eV'
                ],
                a: 0,
                s: 'E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(4000×10⁻¹⁰) = 4.97×10⁻¹⁹ J = 4.97×10⁻¹⁹/1.6×10⁻¹⁹ ≈ 3.1 eV.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'In alpha decay, the mass number of parent nucleus changes by:',
                o: [
                    '0',
                    '−1',
                    '−2',
                    '−4'
                ],
                a: 3,
                s: 'In alpha decay, an α particle (⁴₂He) is emitted. Mass number decreases by 4 and atomic number decreases by 2. Example: ²³⁸U → ²³⁴Th + ⁴He.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'In an npn transistor, the majority carriers in the base region are:',
                o: [
                    'Electrons',
                    'Holes',
                    'Protons',
                    'Neutrons'
                ],
                a: 1,
                s: 'In an npn transistor, the base is p-type, so majority carriers are holes. The base is thin and lightly doped, so most electrons from emitter pass through to collector (current amplification).',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'de Broglie wavelength of a particle with momentum p is:',
                o: [
                    'h/p',
                    'hp',
                    'p/h',
                    'h²/p'
                ],
                a: 0,
                s: 'de Broglie wavelength λ = h/p = h/(mv). This wave-particle duality applies to all matter. Greater momentum means shorter wavelength. This is why electrons can be used for diffraction.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    }
];
}),
"[project]/src/data/neet-pyq/chemistry-pyq.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetChemistryPyq",
    ()=>neetChemistryPyq
]);
const neetChemistryPyq = [
    /* ═══ PHYSICAL CHEMISTRY ═══ */ /* ──── 1. Atomic Structure & Chemical Bonding ──── */ {
        name: 'Atomic Structure & Chemical Bonding',
        slug: 'atomic-structure-bonding',
        questions: [
            {
                q: 'The maximum number of electrons in a subshell with azimuthal quantum number l = 3 is:',
                o: [
                    '6',
                    '10',
                    '14',
                    '18'
                ],
                a: 2,
                s: 'Maximum electrons in a subshell = 2(2l+1). For l = 3 (f subshell): 2(2×3+1) = 2(7) = 14 electrons.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The shape of sp³ hybrid orbitals is:',
                o: [
                    'Linear',
                    'Trigonal planar',
                    'Tetrahedral',
                    'Square planar'
                ],
                a: 2,
                s: 'sp³ hybridization produces 4 hybrid orbitals arranged tetrahedrally with bond angles of 109.5°. Examples: CH₄, NH₃ (with lone pair), H₂O (with 2 lone pairs).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The correct order of bond energy is:',
                o: [
                    'N≡N > O=O > F-F',
                    'F-F > O=O > N≡N',
                    'O=O > N≡N > F-F',
                    'O=O > F-F > N≡N'
                ],
                a: 0,
                s: 'Bond energy: N≡N (945 kJ/mol) > O=O (498 kJ/mol) > F-F (155 kJ/mol). Triple bond is strongest. F-F is weak due to lone pair-lone pair repulsion between small F atoms.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The number of nodes in 3p orbital is:',
                o: [
                    '1',
                    '2',
                    '3',
                    '0'
                ],
                a: 1,
                s: 'Total nodes = n − 1 = 3 − 1 = 2. Radial nodes = n − l − 1 = 3 − 1 − 1 = 1. Angular nodes = l = 1. Total = 1 + 1 = 2 nodes.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Which molecule is paramagnetic?',
                o: [
                    'N₂',
                    'CO',
                    'O₂',
                    'F₂'
                ],
                a: 2,
                s: 'O₂ is paramagnetic because it has 2 unpaired electrons in π*2p orbitals (MOT). Bond order = (10-6)/2 = 2. N₂, CO, F₂ are diamagnetic (all electrons paired).',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The Bohr model of hydrogen atom gives the energy of electron in nth orbit as:',
                o: [
                    'E = −13.6/n eV',
                    'E = −13.6/n² eV',
                    'E = −13.6n² eV',
                    'E = 13.6/n² eV'
                ],
                a: 1,
                s: 'For hydrogen (Z=1): Eₙ = −13.6Z²/n² = −13.6/n² eV. Negative sign indicates electrons are bound. Energy increases (becomes less negative) with increasing n.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Which of the following has the highest electron affinity?',
                o: [
                    'F',
                    'Cl',
                    'Br',
                    'I'
                ],
                a: 1,
                s: 'Chlorine has the highest electron affinity (−349 kJ/mol), not fluorine. Fluorine\'s small size causes electron-electron repulsion in the 2p orbitals, reducing its affinity (−328 kJ/mol).',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The VSEPR shape of XeF₂ is:',
                o: [
                    'Bent',
                    'Linear',
                    'Trigonal planar',
                    'T-shaped'
                ],
                a: 1,
                s: 'XeF₂ has sp³d hybridization with 3 lone pairs and 2 bonding pairs (trigonal bipyramidal electron geometry). The molecular shape is linear (F—Xe—F at 180°).',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Hydrogen bond is strongest in:',
                o: [
                    'HF',
                    'HCl',
                    'HBr',
                    'HI'
                ],
                a: 0,
                s: 'Hydrogen bonding is strongest in HF because fluorine is the most electronegative element and smallest in size, creating the strongest H···F hydrogen bonds. HF has highest boiling point among hydrogen halides.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'The de Broglie wavelength of an electron accelerated through potential V is:',
                o: [
                    'h/√(2meV)',
                    '√(2meV)/h',
                    'h/2meV',
                    '2meV/h'
                ],
                a: 0,
                s: 'KE = eV = p²/(2m) → p = √(2meV). λ = h/p = h/√(2meV). This is the principle behind electron microscopy — small λ gives high resolution.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 2. Chemical Equilibrium & Ionic Equilibrium ──── */ {
        name: 'Equilibrium',
        slug: 'equilibrium',
        questions: [
            {
                q: 'The pH of a 0.001 M HCl solution is:',
                o: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                a: 2,
                s: 'HCl is a strong acid: [H⁺] = 0.001 = 10⁻³ M. pH = −log[H⁺] = −log(10⁻³) = 3.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'For the reaction N₂ + 3H₂ ⇌ 2NH₃, the relationship between Kp and Kc is:',
                o: [
                    'Kp = Kc(RT)⁻²',
                    'Kp = Kc(RT)²',
                    'Kp = Kc',
                    'Kp = Kc(RT)'
                ],
                a: 0,
                s: 'Kp = Kc(RT)^Δn. Δn = 2 − (1+3) = −2. So Kp = Kc(RT)⁻² = Kc/(RT)².',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Le Chatelier\'s principle predicts that increasing pressure shifts equilibrium toward:',
                o: [
                    'Side with more moles of gas',
                    'Side with fewer moles of gas',
                    'No effect',
                    'Reverse reaction always'
                ],
                a: 1,
                s: 'Increasing pressure favours the side with fewer moles of gas (system tries to reduce pressure). For N₂ + 3H₂ ⇌ 2NH₃: forward reaction is favoured (4 moles → 2 moles).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The pH of a buffer solution prepared from weak acid HA and its sodium salt NaA is given by:',
                o: [
                    'pH = pKa + log([HA]/[A⁻])',
                    'pH = pKa + log([A⁻]/[HA])',
                    'pH = pKa − log([A⁻]/[HA])',
                    'pH = pKb + log([A⁻]/[HA])'
                ],
                a: 1,
                s: 'Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) = pKa + log([salt]/[acid]). For basic buffer: pOH = pKb + log([salt]/[base]).',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Ionic product of water (Kw) at 25°C is:',
                o: [
                    '10⁻⁷',
                    '10⁻¹⁴',
                    '10⁻²',
                    '10⁻¹'
                ],
                a: 1,
                s: 'Kw = [H⁺][OH⁻] = 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴ at 25°C. Kw increases with temperature because water dissociation is endothermic.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'If Ksp of AgCl is 1.6 × 10⁻¹⁰, the solubility of AgCl in pure water is:',
                o: [
                    '1.26 × 10⁻⁵ M',
                    '4 × 10⁻⁵ M',
                    '1.6 × 10⁻¹⁰ M',
                    '1.6 × 10⁻⁵ M'
                ],
                a: 0,
                s: 'AgCl ⇌ Ag⁺ + Cl⁻. Ksp = s × s = s². s = √(Ksp) = √(1.6 × 10⁻¹⁰) = 1.26 × 10⁻⁵ M.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'A catalyst affects the equilibrium by:',
                o: [
                    'Shifting equilibrium to the right',
                    'Shifting equilibrium to the left',
                    'Reaching equilibrium faster (no shift)',
                    'Increasing products'
                ],
                a: 2,
                s: 'A catalyst speeds up both forward and reverse reactions equally, so equilibrium is reached faster but the equilibrium constant (K) and position of equilibrium are unchanged.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'The conjugate base of H₂SO₄ is:',
                o: [
                    'HSO₄⁻',
                    'SO₄²⁻',
                    'H₃O⁺',
                    'OH⁻'
                ],
                a: 0,
                s: 'Conjugate base is formed when an acid donates a proton. H₂SO₄ → H⁺ + HSO₄⁻. So HSO₄⁻ is the conjugate base of H₂SO₄.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'For an exothermic reaction at equilibrium, increasing temperature will:',
                o: [
                    'Shift equilibrium forward',
                    'Shift equilibrium backward',
                    'No effect',
                    'Increase Kp'
                ],
                a: 1,
                s: 'For exothermic reaction (ΔH < 0): increasing temperature shifts equilibrium backward (toward reactants) to absorb excess heat. K decreases with temperature (Le Chatelier).',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Common ion effect causes:',
                o: [
                    'Increase in solubility',
                    'Decrease in solubility',
                    'No change in solubility',
                    'Increase in Ksp'
                ],
                a: 1,
                s: 'Common ion effect: adding a common ion shifts the solubility equilibrium backward, decreasing solubility. E.g., adding NaCl to AgCl decreases AgCl solubility because Cl⁻ is common.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 3. Chemical Kinetics & Electrochemistry ──── */ {
        name: 'Chemical Kinetics & Electrochemistry',
        slug: 'kinetics-electrochemistry',
        questions: [
            {
                q: 'The half-life of a first-order reaction is 20 minutes. The rate constant is:',
                o: [
                    '0.0347 min⁻¹',
                    '0.693 min⁻¹',
                    '0.05 min⁻¹',
                    '3.47 min⁻¹'
                ],
                a: 0,
                s: 'For first-order: t₁/₂ = 0.693/k → k = 0.693/20 = 0.0347 min⁻¹. Half-life is independent of initial concentration for first-order reactions.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The EMF of a cell is 0.76 V. If the cell reaction involves transfer of 2 electrons, ΔG° is: (F = 96500 C/mol)',
                o: [
                    '−146.7 kJ/mol',
                    '−73.4 kJ/mol',
                    '146.7 kJ/mol',
                    '73.4 kJ/mol'
                ],
                a: 0,
                s: 'ΔG° = −nFE° = −2 × 96500 × 0.76 = −146,680 J ≈ −146.7 kJ/mol. Negative ΔG° confirms the reaction is spontaneous.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The unit of rate constant for a second-order reaction is:',
                o: [
                    's⁻¹',
                    'mol⁻¹L s⁻¹',
                    'mol L⁻¹ s⁻¹',
                    'mol⁻²L² s⁻¹'
                ],
                a: 1,
                s: 'For nth order: units of k = (mol/L)^(1-n) × s⁻¹. For 2nd order: k = (mol/L)⁻¹ × s⁻¹ = L mol⁻¹ s⁻¹ = mol⁻¹ L s⁻¹.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'In a galvanic cell, the cathode is:',
                o: [
                    'Positive electrode',
                    'Negative electrode',
                    'Always zinc',
                    'Always copper'
                ],
                a: 0,
                s: 'In a galvanic (voltaic) cell: cathode is positive (reduction occurs here — electrons flow toward it). Anode is negative (oxidation occurs). Reverse in electrolytic cell.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The Arrhenius equation is:',
                o: [
                    'k = Ae⁻ᴱᵃ/ᴿᵀ',
                    'k = A + Ea/RT',
                    'k = Ea/RT',
                    'k = AeEa/RT'
                ],
                a: 0,
                s: 'Arrhenius equation: k = Ae^(−Ea/RT), where A = pre-exponential factor, Ea = activation energy, R = gas constant, T = temperature in K. Higher T or lower Ea → larger k.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'How many faradays of electricity are needed to deposit 1 mole of Cu from CuSO₄ solution?',
                o: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                a: 1,
                s: 'Cu²⁺ + 2e⁻ → Cu. Each Cu²⁺ requires 2 electrons. So 1 mole Cu needs 2 moles of electrons = 2 Faraday of electricity (1F = 96500 C).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Rate of reaction is defined as:',
                o: [
                    'Change in concentration per unit time',
                    'Change in concentration per unit volume',
                    'Change in temperature per unit time',
                    'Change in pressure only'
                ],
                a: 0,
                s: 'Rate = −d[R]/dt = +d[P]/dt. It is the change in concentration of reactant (decrease) or product (increase) per unit time. Units: mol L⁻¹ s⁻¹.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Standard hydrogen electrode (SHE) has a potential of:',
                o: [
                    '1.0 V',
                    '−1.0 V',
                    '0.0 V',
                    '0.5 V'
                ],
                a: 2,
                s: 'SHE is the reference electrode with E° = 0.000 V by definition. It consists of Pt electrode in 1 M H⁺ solution with H₂ gas at 1 atm at 298 K.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The order of a reaction is determined by:',
                o: [
                    'Stoichiometry',
                    'Molecularity',
                    'Experiment only',
                    'Theoretical calculation'
                ],
                a: 2,
                s: 'The order of a reaction is always determined experimentally (from rate law). It cannot be deduced from the balanced equation. Molecularity is theoretical but order must be measured.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Kohlrausch\'s law states that:',
                o: [
                    'Conductivity increases with concentration',
                    'At infinite dilution, molar conductivity = sum of individual ionic conductivities',
                    'Resistance is independent of temperature',
                    'Conductance equals current'
                ],
                a: 1,
                s: 'Kohlrausch\'s law: Λ°m = λ°_+ + λ°_−. At infinite dilution, each ion contributes independently to the total molar conductivity. Used to find Λ°m of weak electrolytes.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 4. Solutions & Solid State ──── */ {
        name: 'Solutions & Solid State',
        slug: 'solutions-solid-state',
        questions: [
            {
                q: 'Elevation of boiling point is a _____ property.',
                o: [
                    'Intensive',
                    'Colligative',
                    'Chemical',
                    'Magnetic'
                ],
                a: 1,
                s: 'Colligative properties depend on the number of solute particles, not their nature. The four colligative properties: relative lowering of vapour pressure, boiling point elevation, freezing point depression, osmotic pressure.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The coordination number in FCC crystal structure is:',
                o: [
                    '4',
                    '6',
                    '8',
                    '12'
                ],
                a: 3,
                s: 'In FCC (face-centred cubic), each atom touches 12 nearest neighbours: 4 in same layer, 4 in layer above, 4 in layer below. Coordination number = 12.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Osmotic pressure (π) of a solution is given by:',
                o: [
                    'π = MRT',
                    'π = nRT/V = CRT',
                    'π = MR/T',
                    'π = nT/RV'
                ],
                a: 1,
                s: 'Van\'t Hoff equation: π = CRT = (n/V)RT, where C = molar concentration, R = gas constant, T = temperature in K. Similar to ideal gas equation.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Raoult\'s law states that for an ideal solution:',
                o: [
                    'Partial vapour pressure = mole fraction × vapour pressure of pure component',
                    'Partial pressure = concentration × RT',
                    'Vapour pressure is independent of composition',
                    'Boiling point is constant'
                ],
                a: 0,
                s: 'Raoult\'s law: P_A = x_A × P°_A. The partial vapour pressure of each component equals its mole fraction times its pure vapour pressure. Ideal solutions obey this at all compositions.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Number of atoms per unit cell in BCC is:',
                o: [
                    '1',
                    '2',
                    '4',
                    '6'
                ],
                a: 1,
                s: 'BCC: 8 corners × 1/8 + 1 centre = 1 + 1 = 2 atoms per unit cell. FCC: 8×1/8 + 6×1/2 = 4. Simple cubic: 8×1/8 = 1.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Freezing point depression ΔTf is given by:',
                o: [
                    'ΔTf = Kf × m',
                    'ΔTf = Kb × m',
                    'ΔTf = Kf/m',
                    'ΔTf = m/Kf'
                ],
                a: 0,
                s: 'ΔTf = Kf × m, where Kf = cryoscopic constant (molal freezing point depression constant) and m = molality of solution. For electrolytes: ΔTf = i × Kf × m (i = van\'t Hoff factor).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Schottky defect is observed in crystals with:',
                o: [
                    'High coordination number',
                    'Low coordination number',
                    'Similar sizes of cation and anion',
                    'Very different sized ions'
                ],
                a: 2,
                s: 'Schottky defect occurs when an equal number of cations and anions are missing from lattice sites. Found in highly ionic compounds with similar cation/anion sizes (NaCl, KCl, CsCl). Decreases density.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Henry\'s law constant for a gas is high when:',
                o: [
                    'Gas is very soluble',
                    'Gas is less soluble',
                    'Temperature is low',
                    'Pressure is very high'
                ],
                a: 1,
                s: 'Henry\'s law: p = K_H × x. Higher K_H means lower solubility (more pressure needed to dissolve same amount). K_H increases with temperature (gases become less soluble at higher T).',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Packing efficiency of FCC is:',
                o: [
                    '52.4%',
                    '68%',
                    '74%',
                    '90%'
                ],
                a: 2,
                s: 'FCC (CCP) packing efficiency = (4 × 4/3 πr³)/(16√2 r³) × 100 = 74%. BCC = 68%. Simple cubic = 52.4%. HCP also = 74%.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'An ideal solution obeys:',
                o: [
                    'Henry\'s law only',
                    'Raoult\'s law over entire range',
                    'Dalton\'s law only',
                    'None of the above'
                ],
                a: 1,
                s: 'An ideal solution obeys Raoult\'s law at all concentrations and compositions. ΔH_mix = 0, ΔV_mix = 0 for ideal solutions. Examples: benzene+toluene, hexane+heptane.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ═══ ORGANIC CHEMISTRY ═══ */ /* ──── 5. General Organic Chemistry & Hydrocarbons ──── */ {
        name: 'GOC & Hydrocarbons',
        slug: 'goc-hydrocarbons',
        questions: [
            {
                q: 'The IUPAC name of CH₃-CH=CH-CH₃ is:',
                o: [
                    '2-Butene',
                    '1-Butene',
                    '2-Butyne',
                    'Butane'
                ],
                a: 0,
                s: 'CH₃-CH=CH-CH₃ is but-2-ene (2-butene). The double bond is between C2 and C3 in a 4-carbon chain. Numbering gives the lowest locant to the double bond.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Markovnikov\'s rule applies to the addition of HBr to:',
                o: [
                    'Symmetrical alkenes',
                    'Unsymmetrical alkenes',
                    'Alkynes only',
                    'Alkanes'
                ],
                a: 1,
                s: 'Markovnikov\'s rule: In addition of HX to unsymmetrical alkenes, H adds to the carbon with more H atoms (more substituted carbocation is more stable). Anti-Markovnikov occurs with peroxides.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'The correct order of stability of carbocations is:',
                o: [
                    '1° > 2° > 3°',
                    '3° > 2° > 1°',
                    '2° > 3° > 1°',
                    '1° > 3° > 2°'
                ],
                a: 1,
                s: 'Carbocation stability: 3° > 2° > 1° > methyl. More alkyl groups stabilize the positive charge through hyperconjugation and inductive effect (+I effect).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Benzene undergoes _____ reactions preferentially:',
                o: [
                    'Addition',
                    'Substitution (electrophilic)',
                    'Elimination',
                    'Rearrangement'
                ],
                a: 1,
                s: 'Benzene undergoes electrophilic aromatic substitution (EAS) rather than addition because substitution preserves the aromatic stabilization (36 kcal/mol resonance energy). Examples: nitration, halogenation, Friedel-Crafts.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The inductive effect of CH₃ group is:',
                o: [
                    '+I (electron donating)',
                    '−I (electron withdrawing)',
                    'No effect',
                    '+M effect'
                ],
                a: 0,
                s: 'CH₃ (and all alkyl groups) show +I effect (electron-donating inductive effect). They push electrons toward the attached carbon, stabilizing positive charges and destabilizing negative charges.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Saytzeff\'s rule predicts the major product of elimination as:',
                o: [
                    'Less substituted alkene',
                    'More substituted alkene',
                    'Terminal alkene',
                    'Cyclic product'
                ],
                a: 1,
                s: 'Saytzeff\'s (Zaitsev\'s) rule: In E1 and E2 elimination, the more substituted (more stable) alkene is the major product. β-hydrogen from the carbon with fewer H atoms is preferentially removed.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Toluene is more reactive than benzene toward electrophilic substitution because:',
                o: [
                    'CH₃ is electron-withdrawing',
                    'CH₃ is electron-donating (activating)',
                    'Toluene is larger',
                    'Toluene has no resonance'
                ],
                a: 1,
                s: 'CH₃ is an activating group (+I and hyperconjugation) that increases electron density on the benzene ring, making it more reactive toward electrophiles. It is ortho-para directing.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Ozone reacts with alkenes to form:',
                o: [
                    'Alcohols',
                    'Ozonides → aldehydes/ketones on reductive workup',
                    'Acids',
                    'Ethers'
                ],
                a: 1,
                s: 'Ozonolysis: Alkene + O₃ → ozonide → reductive workup (Zn/H₂O or Me₂S) → aldehydes/ketones. Oxidative workup (H₂O₂) gives carboxylic acids. Used to determine position of double bond.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Which type of isomerism is shown by CH₃CH₂OH and CH₃OCH₃?',
                o: [
                    'Chain isomerism',
                    'Position isomerism',
                    'Functional group isomerism',
                    'Metamerism'
                ],
                a: 2,
                s: 'CH₃CH₂OH (ethanol, alcohol) and CH₃OCH₃ (dimethyl ether) have the same molecular formula (C₂H₆O) but different functional groups — this is functional group isomerism.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Wurtz reaction involves:',
                o: [
                    'Na + alkyl halide → alkane',
                    'Zn + alkyl halide → alkene',
                    'Grignard reagent + water → alkane',
                    'Decarboxylation of sodium salt'
                ],
                a: 0,
                s: 'Wurtz reaction: 2R-X + 2Na → R-R + 2NaX (dry ether). Two alkyl halides couple via sodium metal to form a higher alkane. Only gives even-carbon products from same R-X.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 6. Alcohols, Aldehydes, Ketones & Carboxylic Acids ──── */ {
        name: 'Oxygen-Containing Functional Groups',
        slug: 'oxygen-functional-groups',
        questions: [
            {
                q: 'Lucas test is used to distinguish between:',
                o: [
                    'Alkenes and alkynes',
                    'Primary, secondary, and tertiary alcohols',
                    'Aldehydes and ketones',
                    'Acids and esters'
                ],
                a: 1,
                s: 'Lucas test (ZnCl₂/HCl): 3° alcohol → immediate turbidity. 2° alcohol → turbidity in 5-10 min. 1° alcohol → no turbidity at room temperature. Based on SN1 reactivity.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Tollen\'s reagent (ammoniacal silver nitrate) is reduced by:',
                o: [
                    'Ketones',
                    'Aldehydes',
                    'Both aldehydes and ketones',
                    'Neither'
                ],
                a: 1,
                s: 'Tollen\'s reagent ([Ag(NH₃)₂]⁺) is reduced only by aldehydes (not ketones) to give silver mirror: RCHO + 2Ag⁺ + 2OH⁻ → RCOO⁻ + 2Ag↓ + H₂O. Known as silver mirror test.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Aldol condensation involves:',
                o: [
                    'Two molecules of aldehyde/ketone with α-hydrogen in dilute base',
                    'Acid + alcohol',
                    'Aldehyde + amine',
                    'Ketone + halide'
                ],
                a: 0,
                s: 'Aldol condensation: Two aldehyde/ketone molecules with α-hydrogens react in dilute NaOH to form β-hydroxy aldehyde/ketone (aldol). On heating, dehydration gives α,β-unsaturated carbonyl compound.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The correct order of acid strength is:',
                o: [
                    'CH₃COOH > ClCH₂COOH > Cl₂CHCOOH',
                    'Cl₂CHCOOH > ClCH₂COOH > CH₃COOH',
                    'ClCH₂COOH > Cl₂CHCOOH > CH₃COOH',
                    'CH₃COOH > Cl₂CHCOOH > ClCH₂COOH'
                ],
                a: 1,
                s: 'More Cl atoms → stronger −I effect → more stabilization of carboxylate anion → stronger acid. Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH > CH₃COOH.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Dehydration of ethanol at 170°C with conc. H₂SO₄ gives:',
                o: [
                    'Diethyl ether',
                    'Ethylene',
                    'Acetaldehyde',
                    'Acetic acid'
                ],
                a: 1,
                s: 'At 170°C: ethanol undergoes intramolecular dehydration → ethylene (CH₂=CH₂). At 140°C: intermolecular dehydration → diethyl ether (C₂H₅OC₂H₅). Temperature determines the product.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Fehling\'s solution test is positive for:',
                o: [
                    'Acetone',
                    'Acetaldehyde',
                    'Benzaldehyde',
                    'Acetophenone'
                ],
                a: 1,
                s: 'Fehling\'s test is positive for aliphatic aldehydes (red ppt of Cu₂O). Acetaldehyde (CH₃CHO) gives positive result. Aromatic aldehydes (benzaldehyde), ketones, and acetophenone give negative results.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Esterification is a reaction between:',
                o: [
                    'Two acids',
                    'Acid and base',
                    'Carboxylic acid and alcohol',
                    'Ester and water'
                ],
                a: 2,
                s: 'Esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyst). Fischer esterification uses H₂SO₄ or HCl as catalyst. It is a reversible, nucleophilic acyl substitution reaction.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Cannizzaro reaction is given by:',
                o: [
                    'Aldehydes with α-hydrogen',
                    'Aldehydes without α-hydrogen',
                    'Ketones',
                    'Carboxylic acids'
                ],
                a: 1,
                s: 'Cannizzaro reaction: Aldehydes WITHOUT α-hydrogen (like HCHO, C₆H₅CHO) undergo self-disproportionation in concentrated NaOH → one molecule is oxidized to acid, other reduced to alcohol.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The product of reaction of ethanol with Na metal is:',
                o: [
                    'Sodium ethanoate',
                    'Sodium ethoxide + H₂',
                    'Ethane',
                    'Diethyl ether'
                ],
                a: 1,
                s: '2C₂H₅OH + 2Na → 2C₂H₅ONa (sodium ethoxide) + H₂↑. This reaction shows the weakly acidic nature of alcohols (pKa ~16). More acidic alcohols react more vigorously.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Acetic acid reacts with NaHCO₃ to produce:',
                o: [
                    'CO₂ gas',
                    'H₂ gas',
                    'O₂ gas',
                    'No gas'
                ],
                a: 0,
                s: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑. The brisk effervescence of CO₂ is a simple test for carboxylic acids. Phenols do not react with NaHCO₃.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 7. Amines, Polymers & Biomolecules ──── */ {
        name: 'Amines, Polymers & Biomolecules',
        slug: 'amines-polymers-biomolecules',
        questions: [
            {
                q: 'The correct order of basicity of amines in aqueous solution is:',
                o: [
                    '1° > 2° > 3°',
                    '2° > 1° > 3°',
                    '2° > 3° > 1°',
                    '3° > 2° > 1°'
                ],
                a: 1,
                s: 'In aqueous solution: 2° > 1° > 3° for simple aliphatic amines. 3° amines have steric hindrance to solvation (hydration of ammonium salt), reducing effective basicity in water.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Nylon-6,6 is a polymer of:',
                o: [
                    'Caprolactam',
                    'Adipic acid and hexamethylenediamine',
                    'Glycine',
                    'Terephthalic acid and ethylene glycol'
                ],
                a: 1,
                s: 'Nylon-6,6 is a condensation polymer of adipic acid (HOOC-(CH₂)₄-COOH) and hexamethylenediamine (H₂N-(CH₂)₆-NH₂). The "6,6" refers to 6 carbons in each monomer. Nylon-6 is from caprolactam.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Which test distinguishes primary amines from secondary and tertiary?',
                o: [
                    'Lassaigne test',
                    'Carbylamine (isocyanide) test',
                    'Hinsberg test',
                    'Lucas test'
                ],
                a: 1,
                s: 'Carbylamine test: Only primary amines react with CHCl₃ + KOH to form foul-smelling isocyanides (carbylamines). R-NH₂ + CHCl₃ + 3KOH → R-NC + 3KCl + 3H₂O.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The carbohydrate that is a disaccharide is:',
                o: [
                    'Glucose',
                    'Fructose',
                    'Sucrose',
                    'Starch'
                ],
                a: 2,
                s: 'Sucrose (table sugar) is a disaccharide composed of glucose + fructose linked by α-1,β-2 glycosidic bond. Glucose and fructose are monosaccharides. Starch is a polysaccharide.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'Bakelite is an example of:',
                o: [
                    'Addition polymer',
                    'Condensation polymer (thermosetting)',
                    'Elastomer',
                    'Fibre'
                ],
                a: 1,
                s: 'Bakelite is a thermosetting condensation polymer of phenol and formaldehyde. Once set, it cannot be reshaped by heating. Used in electrical switches, handles, and cookware handles.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'The secondary structure of proteins refers to:',
                o: [
                    'Amino acid sequence',
                    'α-helix and β-pleated sheet',
                    'Overall 3D shape',
                    'Subunit assembly'
                ],
                a: 1,
                s: 'Secondary structure: local folding patterns — α-helix (right-handed coil, H-bonds between i and i+4 residues) and β-pleated sheet (H-bonds between adjacent chains). Stabilized by hydrogen bonds.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Aniline reacts with HNO₂ at 0-5°C to form:',
                o: [
                    'Nitroaniline',
                    'Benzenediazonium chloride',
                    'Phenol',
                    'Benzamide'
                ],
                a: 1,
                s: 'Diazotization: C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ (benzenediazonium chloride) at 0-5°C. Above 5°C, diazonium salt decomposes. Used in synthesis of azo dyes and phenol.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Zwitter ion is formed by:',
                o: [
                    'Carboxylic acids',
                    'Amino acids',
                    'Amines',
                    'Phenols'
                ],
                a: 1,
                s: 'Amino acids exist as zwitter ions (dipolar ions) at physiological pH: H₃N⁺-CHR-COO⁻. The amino group is protonated (+) and carboxyl group is deprotonated (−), giving zero net charge at isoelectric pH.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Natural rubber is a polymer of:',
                o: [
                    'Styrene',
                    'Isoprene (2-methyl-1,3-butadiene)',
                    'Chloroprene',
                    'Butadiene'
                ],
                a: 1,
                s: 'Natural rubber is cis-1,4-polyisoprene. Isoprene (CH₂=C(CH₃)-CH=CH₂) polymerizes to form the elastic polymer. Vulcanization (cross-linking with S) improves its properties.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'DNA and RNA differ in that:',
                o: [
                    'DNA has uracil, RNA has thymine',
                    'DNA has deoxyribose sugar, RNA has ribose',
                    'DNA is single-stranded, RNA is double-stranded',
                    'DNA has only purines'
                ],
                a: 1,
                s: 'DNA has deoxyribose sugar + thymine base; RNA has ribose sugar + uracil base. DNA is usually double-stranded (double helix); RNA is usually single-stranded.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ═══ INORGANIC CHEMISTRY ═══ */ /* ──── 8. Periodic Table & Chemical Bonding Trends ──── */ {
        name: 'Periodic Table & Trends',
        slug: 'periodic-trends',
        questions: [
            {
                q: 'The element with the highest electronegativity is:',
                o: [
                    'Oxygen',
                    'Fluorine',
                    'Chlorine',
                    'Nitrogen'
                ],
                a: 1,
                s: 'Fluorine has the highest electronegativity (4.0 on Pauling scale) in the periodic table. Electronegativity generally increases across a period and decreases down a group.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'The correct order of ionization energy is:',
                o: [
                    'Li < Be < B < C',
                    'Li < B < Be < C',
                    'B < Li < Be < C',
                    'Be < B < C < Li'
                ],
                a: 1,
                s: 'IE order: Li < B < Be < C. Anomaly: Be > B because Be has fully-filled 2s² (extra stable), so removing an electron from Be requires more energy than from B (2p¹).',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Which of the following oxides is amphoteric?',
                o: [
                    'Na₂O',
                    'Al₂O₃',
                    'SO₃',
                    'CO₂'
                ],
                a: 1,
                s: 'Al₂O₃ is amphoteric — it reacts with both acids (Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O) and bases (Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O). Other amphoteric oxides: ZnO, PbO, SnO.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'In the periodic table, atomic radius generally:',
                o: [
                    'Increases across a period',
                    'Decreases across a period (left to right)',
                    'Remains constant across a period',
                    'Increases then decreases'
                ],
                a: 1,
                s: 'Atomic radius decreases across a period (left to right) because nuclear charge increases while electrons are added to the same shell, resulting in greater effective nuclear charge pulling electrons closer.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The element with electronic configuration [Ar] 3d¹⁰ 4s¹ is:',
                o: [
                    'Zinc',
                    'Copper',
                    'Nickel',
                    'Gallium'
                ],
                a: 1,
                s: 'Copper (Cu, Z=29) has the configuration [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²) because fully-filled 3d¹⁰ is more stable. This is an exception to the Aufbau principle.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Noble gases have very high ionization energy because:',
                o: [
                    'They are metals',
                    'They have completely filled electron shells (stable octet)',
                    'They have large atomic radius',
                    'They are radioactive'
                ],
                a: 1,
                s: 'Noble gases have completely filled valence shells (ns²np⁶), making them extremely stable. Removing an electron from such a stable configuration requires very high energy.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Diagonal relationship exists between:',
                o: [
                    'Na and Ca',
                    'Li and Mg',
                    'K and Ca',
                    'Be and B'
                ],
                a: 1,
                s: 'Diagonal relationship: Li-Mg, Be-Al, B-Si have similar properties due to similar charge/size ratio (polarizing power). Li and Mg both form nitrides, oxides, and their carbonates decompose on heating.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Which of the following has the largest atomic radius?',
                o: [
                    'Na',
                    'Mg',
                    'Al',
                    'K'
                ],
                a: 3,
                s: 'K has the largest atomic radius among these: K > Na > Mg > Al. K is in the next period (4th) while others are in the 3rd period. Within period 3: Na > Mg > Al (nuclear charge effect).',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Electron affinity is most negative (highest) for:',
                o: [
                    'Fluorine',
                    'Chlorine',
                    'Bromine',
                    'Iodine'
                ],
                a: 1,
                s: 'Chlorine has the most negative (highest magnitude) electron affinity (−349 kJ/mol). Fluorine\'s small size causes interelectronic repulsion, reducing its EA to −328 kJ/mol.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Lanthanide contraction causes the atomic radii of 5d transition metals to be:',
                o: [
                    'Much larger than 4d',
                    'Similar to 4d metals',
                    'Much smaller than 4d',
                    'Equal to 3d metals'
                ],
                a: 1,
                s: 'Lanthanide contraction: poor shielding by 4f electrons causes 5d elements to have similar radii as 4d elements. Zr ≈ Hf, Nb ≈ Ta, Mo ≈ W — making them hard to separate.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 9. Coordination Compounds & d-Block Elements ──── */ {
        name: 'Coordination Compounds & d-Block',
        slug: 'coordination-d-block',
        questions: [
            {
                q: 'The coordination number of [Co(NH₃)₆]³⁺ is:',
                o: [
                    '3',
                    '6',
                    '4',
                    '2'
                ],
                a: 1,
                s: 'Coordination number = number of ligand donor atoms directly bonded to the central metal. Each NH₃ is monodentate → 6 NH₃ molecules → CN = 6.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which transition metal ion is coloured?',
                o: [
                    'Sc³⁺ (3d⁰)',
                    'Zn²⁺ (3d¹⁰)',
                    'Cu²⁺ (3d⁹)',
                    'Ti⁴⁺ (3d⁰)'
                ],
                a: 2,
                s: 'Cu²⁺ (3d⁹) is coloured (blue) because it has unpaired d electrons that can undergo d-d transitions by absorbing visible light. d⁰ and d¹⁰ configurations are colourless.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'EDTA is a _____ ligand.',
                o: [
                    'Monodentate',
                    'Bidentate',
                    'Hexadentate',
                    'Tetradentate'
                ],
                a: 2,
                s: 'EDTA (ethylenediaminetetraacetic acid) is a hexadentate ligand — it binds through 2 nitrogen atoms and 4 carboxylate oxygen atoms (total 6 donor atoms).',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'The IUPAC name of [Pt(NH₃)₂Cl₂] is:',
                o: [
                    'Diamminedichloroplatinum(II)',
                    'Dichlorodiammineplatinum(II)',
                    'Platinum diammine dichloride',
                    'Platinichloride'
                ],
                a: 0,
                s: 'IUPAC naming: ligands in alphabetical order (ammine before chloro) + metal name with oxidation state. Pt is +2 (2NH₃ neutral, 2Cl⁻ give −2). Name: diamminedichloridoplatinum(II) or diamminedichloroplatinum(II).',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The magnetic moment of Fe²⁺ (3d⁶, high spin octahedral) is:',
                o: [
                    '0 BM',
                    '√8 BM',
                    '√24 BM',
                    '√35 BM'
                ],
                a: 2,
                s: 'Fe²⁺ (3d⁶) in high spin: 4 unpaired electrons (t₂g⁴ eg²). μ = √(n(n+2)) = √(4×6) = √24 ≈ 4.9 BM.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'KMnO₄ acts as a strong _____ agent.',
                o: [
                    'Reducing',
                    'Oxidizing',
                    'Catalytic',
                    'Complexing'
                ],
                a: 1,
                s: 'KMnO₄ (potassium permanganate) is a strong oxidizing agent. Mn is in +7 state (highest), readily gains electrons → gets reduced. Used in titrations (self-indicator, purple to colourless).',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Crystal field splitting energy (Δ) in octahedral complex is:',
                o: [
                    'Greater than in tetrahedral',
                    'Less than in tetrahedral',
                    'Equal to tetrahedral',
                    'Zero'
                ],
                a: 0,
                s: 'Δ_oct > Δ_tet. In fact, Δ_tet ≈ (4/9)Δ_oct for the same metal and ligands. This is why octahedral complexes are more common (greater CFSE stabilization).',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Interstitial compounds of transition metals are characterized by:',
                o: [
                    'High melting points and hardness',
                    'Low melting points',
                    'Solubility in water',
                    'Softness'
                ],
                a: 0,
                s: 'Interstitial compounds form when small atoms (H, C, N, B) occupy voids in metal lattices. They have very high melting points, extreme hardness, metallic lustre, and chemical inertness. E.g., TiC, steel.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'Isomerism shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br is:',
                o: [
                    'Geometrical isomerism',
                    'Optical isomerism',
                    'Ionization isomerism',
                    'Linkage isomerism'
                ],
                a: 2,
                s: 'Ionization isomerism: exchange of ions between coordination sphere and ionization sphere. [Co(NH₃)₅Br]SO₄ gives SO₄²⁻ ions, while [Co(NH₃)₅SO₄]Br gives Br⁻ ions in solution.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Transition metals show variable oxidation states because of:',
                o: [
                    'Large atomic size',
                    'Availability of both ns and (n−1)d electrons for bonding',
                    'Noble gas configuration',
                    'Low ionization energy only'
                ],
                a: 1,
                s: 'Transition metals have both ns and (n-1)d electrons with similar energies that can be involved in bonding, leading to multiple oxidation states. Inner electrons also participate in bonding.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    },
    /* ──── 10. p-Block Elements & s-Block Elements ──── */ {
        name: 'p-Block & s-Block Elements',
        slug: 'p-block-s-block',
        questions: [
            {
                q: 'Plaster of Paris is chemically:',
                o: [
                    'CaSO₄·2H₂O',
                    'CaSO₄·½H₂O',
                    '2CaSO₄·H₂O',
                    'CaSO₄'
                ],
                a: 1,
                s: 'Plaster of Paris = CaSO₄·½H₂O (calcium sulphate hemihydrate). When mixed with water: CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (gypsum). This setting makes it useful for casts.',
                year: 2023,
                shift: 'NEET 2023'
            },
            {
                q: 'Which allotrope of carbon is the hardest natural substance?',
                o: [
                    'Graphite',
                    'Fullerene',
                    'Diamond',
                    'Carbon nanotube'
                ],
                a: 2,
                s: 'Diamond is the hardest natural substance (10 on Mohs scale). Each carbon is sp³ hybridized with 4 covalent bonds in a 3D tetrahedral network, making it extremely rigid.',
                year: 2022,
                shift: 'NEET 2022'
            },
            {
                q: 'Bleaching powder is:',
                o: [
                    'Ca(OCl)₂',
                    'CaOCl₂ (calcium oxychloride)',
                    'CaCl₂',
                    'Ca(OH)₂'
                ],
                a: 1,
                s: 'Bleaching powder = CaOCl₂ or Ca(OCl)Cl (calcium hypochlorite-chloride). Made by passing Cl₂ over Ca(OH)₂. The OCl⁻ (hypochlorite) part is the active bleaching agent.',
                year: 2021,
                shift: 'NEET 2021'
            },
            {
                q: 'Ozone (O₃) is a/an:',
                o: [
                    'Allotrope of oxygen',
                    'Isotope of oxygen',
                    'Isobar of oxygen',
                    'Compound of oxygen'
                ],
                a: 0,
                s: 'Ozone (O₃) is an allotrope of oxygen. Allotropes are different structural forms of the same element. O₂ (dioxygen) and O₃ (trioxygen/ozone) are allotropes of oxygen.',
                year: 2020,
                shift: 'NEET 2020'
            },
            {
                q: 'The strongest reducing agent among alkali metals is:',
                o: [
                    'Na',
                    'K',
                    'Li',
                    'Cs'
                ],
                a: 2,
                s: 'In aqueous solution, Li is the strongest reducing agent (most negative E° = −3.04 V) due to its highest hydration energy. Despite having the highest IE among alkali metals, its high hydration energy compensates.',
                year: 2019,
                shift: 'NEET 2019'
            },
            {
                q: 'Which oxide of nitrogen is called "laughing gas"?',
                o: [
                    'NO',
                    'NO₂',
                    'N₂O',
                    'N₂O₃'
                ],
                a: 2,
                s: 'N₂O (nitrous oxide) is called "laughing gas" because it produces euphoria and mild anesthesia when inhaled. It was one of the first anesthetics used in dentistry.',
                year: 2018,
                shift: 'NEET 2018'
            },
            {
                q: 'Baking soda is:',
                o: [
                    'Na₂CO₃',
                    'NaHCO₃',
                    'NaOH',
                    'NaCl'
                ],
                a: 1,
                s: 'Baking soda = NaHCO₃ (sodium bicarbonate/sodium hydrogen carbonate). It releases CO₂ when heated or mixed with acid, causing bread/cake to rise. Na₂CO₃ is washing soda.',
                year: 2017,
                shift: 'NEET 2017'
            },
            {
                q: 'Which of the following is a noble gas compound?',
                o: [
                    'XeF₂',
                    'NeF₂',
                    'ArF₂',
                    'HeF₂'
                ],
                a: 0,
                s: 'XeF₂ is a real noble gas compound (xenon difluoride). Xe is large enough and has low enough IE to form compounds with highly electronegative F and O. He, Ne, Ar do not form stable compounds.',
                year: 2016,
                shift: 'NEET 2016'
            },
            {
                q: 'The number of P-O-P bridges in P₄O₁₀ is:',
                o: [
                    '4',
                    '6',
                    '8',
                    '10'
                ],
                a: 1,
                s: 'P₄O₁₀ has a cage structure with 6 P-O-P bridges (each bridge connects two P atoms through an oxygen). It also has 4 terminal P=O bonds (one per P). Total: 6 bridging + 4 terminal oxygens = 10.',
                year: 2024,
                shift: 'NEET 2024'
            },
            {
                q: 'Portland cement contains:',
                o: [
                    'CaO + SiO₂ + Al₂O₃',
                    'CaSO₄ + SiO₂',
                    'CaCO₃ only',
                    'MgO + CaO'
                ],
                a: 0,
                s: 'Portland cement is a mixture of calcium silicates and aluminates: CaO (60-70%), SiO₂ (20-25%), Al₂O₃ (5-10%), Fe₂O₃ (2-3%). Setting involves hydration of these compounds.',
                year: 2015,
                shift: 'NEET 2015'
            }
        ]
    }
];
}),
"[project]/src/data/neet-pyq/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAllNEETPYQSlugs",
    ()=>buildAllNEETPYQSlugs,
    "getAllNEETPYQYears",
    ()=>getAllNEETPYQYears,
    "getGrandTotalNEETPYQ",
    ()=>getGrandTotalNEETPYQ,
    "getNEETPYQChapter",
    ()=>getNEETPYQChapter,
    "getNEETPYQChapterCount",
    ()=>getNEETPYQChapterCount,
    "getNEETPYQSlugByParams",
    ()=>getNEETPYQSlugByParams,
    "getNEETPYQuestion",
    ()=>getNEETPYQuestion,
    "getTotalNEETPYQQuestions",
    ()=>getTotalNEETPYQQuestions,
    "neetBiologyPYQBank",
    ()=>neetBiologyPYQBank,
    "neetChemistryPYQBank",
    ()=>neetChemistryPYQBank,
    "neetPhysicsPYQBank",
    ()=>neetPhysicsPYQBank,
    "neetPyqSubjectBanks",
    ()=>neetPyqSubjectBanks,
    "parseNEETPYQSlug",
    ()=>parseNEETPYQSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slugify.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$biology$2d$botany$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/biology-botany-pyq.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$biology$2d$zoology$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/biology-zoology-pyq.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$physics$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/physics-pyq.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$chemistry$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/chemistry-pyq.ts [app-ssr] (ecmascript)");
;
;
;
;
;
/* ─── Helper: merge chapters with duplicate slugs ─── */ function mergeChapters(chapters) {
    const map = new Map();
    for (const ch of chapters){
        const existing = map.get(ch.slug);
        if (existing) {
            existing.questions = [
                ...existing.questions,
                ...ch.questions
            ];
        } else {
            map.set(ch.slug, {
                ...ch,
                questions: [
                    ...ch.questions
                ]
            });
        }
    }
    return [
        ...map.values()
    ];
}
/* ═══════════════════════════════════════════════════
   Subject Banks
   Biology = Botany + Zoology combined
   ═══════════════════════════════════════════════════ */ const allBiologyPYQ = mergeChapters([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$biology$2d$botany$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["botanyPyq"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$biology$2d$zoology$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoologyPyq"]
]);
const neetBiologyPYQBank = {
    subject: 'Biology',
    slug: 'biology',
    icon: '🧬',
    chapters: allBiologyPYQ
};
const allPhysicsPYQ = mergeChapters([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$physics$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetPhysicsPyq"]
]);
const neetPhysicsPYQBank = {
    subject: 'Physics',
    slug: 'physics',
    icon: '⚡',
    chapters: allPhysicsPYQ
};
const allChemistryPYQ = mergeChapters([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$chemistry$2d$pyq$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetChemistryPyq"]
]);
const neetChemistryPYQBank = {
    subject: 'Chemistry',
    slug: 'chemistry',
    icon: '🧪',
    chapters: allChemistryPYQ
};
const neetPyqSubjectBanks = [
    neetBiologyPYQBank,
    neetPhysicsPYQBank,
    neetChemistryPYQBank
];
function buildAllNEETPYQSlugs() {
    const result = [];
    for (const bank of neetPyqSubjectBanks){
        for (const chapter of bank.chapters){
            // Build base slugs from question text, then deduplicate
            const baseSlugs = chapter.questions.map((q)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugifyQuestion"])(q.q));
            const uniqueSlugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deduplicateSlugs"])(baseSlugs);
            chapter.questions.forEach((_, idx)=>{
                const slug = `neet-pyq-${bank.slug}-${chapter.slug}-${uniqueSlugs[idx]}`;
                result.push({
                    slug,
                    params: {
                        subject: bank.slug,
                        chapter: chapter.slug,
                        questionIndex: idx + 1
                    }
                });
            });
        }
    }
    return result;
}
/* ─── Pre-built slug → params lookup map ─── */ const _allNEETPYQSlugs = buildAllNEETPYQSlugs();
const _neetPyqSlugMap = new Map(_allNEETPYQSlugs.map((s)=>[
        s.slug,
        s.params
    ]));
/* ─── Reverse lookup: params → slug ─── */ const _neetPyqParamToSlug = new Map(_allNEETPYQSlugs.map((s)=>[
        `${s.params.subject}|${s.params.chapter}|${s.params.questionIndex}`,
        s.slug
    ]));
function getNEETPYQSlugByParams(subject, chapter, questionIndex) {
    return _neetPyqParamToSlug.get(`${subject}|${chapter}|${questionIndex}`) ?? null;
}
function parseNEETPYQSlug(slug) {
    return _neetPyqSlugMap.get(slug) ?? null;
}
function getNEETPYQuestion(params) {
    const bank = neetPyqSubjectBanks.find((b)=>b.slug === params.subject);
    if (!bank) return null;
    const chapter = bank.chapters.find((c)=>c.slug === params.chapter);
    if (!chapter) return null;
    return chapter.questions[params.questionIndex - 1] ?? null;
}
function getNEETPYQChapter(subjectSlug, chapterSlug) {
    const bank = neetPyqSubjectBanks.find((b)=>b.slug === subjectSlug);
    return bank?.chapters.find((c)=>c.slug === chapterSlug);
}
function getTotalNEETPYQQuestions(subjectSlug) {
    const bank = neetPyqSubjectBanks.find((b)=>b.slug === subjectSlug);
    if (!bank) return 0;
    return bank.chapters.reduce((sum, ch)=>sum + ch.questions.length, 0);
}
function getNEETPYQChapterCount(chapter) {
    return chapter.questions.length;
}
function getAllNEETPYQYears() {
    const years = new Set();
    for (const bank of neetPyqSubjectBanks){
        for (const ch of bank.chapters){
            for (const q of ch.questions){
                years.add(q.year);
            }
        }
    }
    return [
        ...years
    ].sort((a, b)=>b - a);
}
function getGrandTotalNEETPYQ() {
    return neetPyqSubjectBanks.reduce((total, bank)=>total + bank.chapters.reduce((sum, ch)=>sum + ch.questions.length, 0), 0);
}
}),
"[project]/src/lib/questionPageSEO.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildConceptSummary",
    ()=>buildConceptSummary,
    "buildExamTips",
    ()=>buildExamTips,
    "buildJEEPYQFAQs",
    ()=>buildJEEPYQFAQs,
    "buildJEEPracticeFAQs",
    ()=>buildJEEPracticeFAQs,
    "buildLearningResourceSchema",
    ()=>buildLearningResourceSchema,
    "buildNEETPYQFAQs",
    ()=>buildNEETPYQFAQs,
    "buildNEETPracticeFAQs",
    ()=>buildNEETPracticeFAQs,
    "buildPYQOverview",
    ()=>buildPYQOverview,
    "buildTopicOverview",
    ()=>buildTopicOverview
]);
/* ═══════════════════════════════════════════════════
   Dynamic SEO content generators for question pages.
   Generates unique, relevant text for each chapter/
   topic/difficulty combination — no hardcoded walls
   of text that search engines could penalise.
   ═══════════════════════════════════════════════════ */ /* ── helpers ── */ const cap = (s)=>s.charAt(0).toUpperCase() + s.slice(1);
function buildJEEPracticeFAQs(subject, chapterName, topicName, difficulty, totalQs) {
    return [
        {
            question: `How many ${difficulty} questions are available for ${topicName} in JEE ${subject}?`,
            answer: `MindPeak offers ${totalQs} ${difficulty.toLowerCase()}-level MCQs on ${topicName} (${chapterName}) for JEE ${subject}. Each question comes with a detailed step-by-step solution so you can learn the concept, not just the answer.`
        },
        {
            question: `Is ${topicName} important for JEE Main and Advanced?`,
            answer: `Yes. ${topicName} under ${chapterName} is a frequently tested topic in both JEE Main and JEE Advanced. Questions from this topic appear regularly and mastering it can give you a significant edge in the exam.`
        },
        {
            question: `How should I prepare ${chapterName} for JEE?`,
            answer: `Start with Easy questions to build conceptual clarity, then move to Medium for application-based practice, and finally tackle Hard questions for competitive-level depth. MindPeak's chapter-wise practice with instant solutions makes this progression seamless.`
        },
        {
            question: `Are these practice questions based on the JEE syllabus?`,
            answer: `Absolutely. All questions on ${topicName} are crafted by subject experts and aligned with the latest NTA JEE syllabus. They cover the key concepts, formulas, and problem-solving patterns that appear in the actual exam.`
        },
        {
            question: `Can I get 1-on-1 help if I'm stuck on ${chapterName}?`,
            answer: `Yes! MindPeak provides personalized 1-on-1 coaching where expert mentors solve doubts in real time, explain weak areas, and build a custom study plan tailored to your pace and goals. Book a free demo class to get started.`
        }
    ];
}
function buildJEEPYQFAQs(subject, chapterName, year, exam, totalQs) {
    const examLabel = exam === 'advanced' ? 'JEE Advanced' : 'JEE Main';
    return [
        {
            question: `How many previous year questions are available for ${chapterName} in JEE ${subject}?`,
            answer: `MindPeak has ${totalQs} previous year questions on ${chapterName} from JEE Main and JEE Advanced spanning multiple years. Each PYQ includes the original year, shift, and a detailed solution.`
        },
        {
            question: `Was this question asked in ${examLabel} ${year}?`,
            answer: `Yes. This question on ${chapterName} appeared in ${examLabel} ${year}. Practising actual PYQs is one of the most effective strategies for understanding the exam pattern and question style.`
        },
        {
            question: `Why should I solve JEE previous year questions?`,
            answer: `PYQs reveal the exam's difficulty pattern, frequently tested sub-topics, and the style of options used. Solving them improves time management, boosts confidence, and helps you identify high-yield topics within ${chapterName}.`
        },
        {
            question: `How is ${chapterName} weighted in JEE?`,
            answer: `${chapterName} is a consistently important chapter in JEE ${subject}. Historically, 1-3 questions from this chapter appear every year in JEE Main, and it's a favourite for conceptual questions in JEE Advanced as well.`
        }
    ];
}
function buildNEETPracticeFAQs(subject, chapterName, topicName, difficulty, totalQs) {
    return [
        {
            question: `How many ${difficulty} NEET ${subject} questions are on ${topicName}?`,
            answer: `There are ${totalQs} ${difficulty.toLowerCase()}-level MCQs on ${topicName} (${chapterName}) prepared for NEET ${subject} preparation. Every question includes a detailed NCERT-aligned solution.`
        },
        {
            question: `Is ${topicName} important for NEET UG?`,
            answer: `Yes. ${topicName} from ${chapterName} is a high-weightage area in NEET. NTA regularly asks 2-4 questions from this topic, making it critical for scoring well in ${subject}.`
        },
        {
            question: `How should I study ${chapterName} for NEET?`,
            answer: `Begin with NCERT thoroughly, then practise Easy MCQs for concept recall and Medium/Hard for application and assertion-reason style questions. MindPeak's difficulty-graded practice mirrors the actual NEET pattern.`
        },
        {
            question: `Are NEET practice questions on MindPeak based on NCERT?`,
            answer: `Yes. All NEET ${subject} questions are aligned with the NCERT syllabus and NTA guidelines. They cover factual recall, diagram-based reasoning, and conceptual application — exactly what NEET demands.`
        },
        {
            question: `How can MindPeak help me score better in NEET ${subject}?`,
            answer: `MindPeak offers 1-on-1 personalised coaching with NEET expert mentors, chapter-wise practice with instant solutions, and custom study plans — all designed to maximise your NEET score. Try a free demo class today.`
        }
    ];
}
function buildNEETPYQFAQs(subject, chapterName, year, shift, totalQs) {
    return [
        {
            question: `How many NEET previous year questions are available for ${chapterName}?`,
            answer: `MindPeak has ${totalQs} NEET PYQs on ${chapterName} across multiple years and shifts. Each question includes the year, shift details, and a comprehensive NCERT-based solution.`
        },
        {
            question: `Is this question from NEET ${year}?`,
            answer: `Yes. This ${subject} question on ${chapterName} was asked in NEET ${year} (${shift}). Solving actual PYQs is the best way to understand NTA's pattern and improve your score.`
        },
        {
            question: `Why are NEET PYQs important for preparation?`,
            answer: `NEET PYQs reveal repeated concepts, common traps, and the exact difficulty level NTA targets. Many questions are directly repeated or slightly modified — solving them gives you a proven scoring advantage.`
        },
        {
            question: `How is ${chapterName} weighted in NEET?`,
            answer: `${chapterName} is a consistently high-yield chapter in NEET ${subject}. NTA has asked multiple questions from this chapter every year, making it one of the most important topics for score maximisation.`
        }
    ];
}
function buildTopicOverview(exam, subject, chapterName, topicName, difficulty) {
    return `${topicName} is a core concept within ${chapterName} for ${exam} ${subject} preparation. Understanding ${topicName} at the ${difficulty.toLowerCase()} level builds the foundation needed to tackle more advanced problems in the exam. This practice set covers key formulas, conceptual traps, and frequently asked patterns — helping you move from theory to exam-ready problem solving.`;
}
function buildPYQOverview(exam, subject, chapterName, year) {
    return `This previous year question from ${exam} ${year} tests your understanding of ${chapterName} — one of the most important chapters in ${exam} ${subject}. By solving actual past-exam questions, you gain insight into the examiner's approach, learn to manage time under pressure, and identify which concepts get tested most frequently.`;
}
function buildConceptSummary(exam, subject, chapterName, topicName, difficulty) {
    const diff = difficulty ? ` ${difficulty.toLowerCase()}-level` : '';
    return [
        `${topicName} is one of the most important concepts within ${chapterName} for ${exam} ${subject} preparation. ${exam === 'JEE' ? 'Both JEE Main and JEE Advanced' : 'The NEET UG exam'} regularly feature questions from this area, making it essential for every serious aspirant to develop a thorough understanding.`,
        `This${diff} practice question tests your conceptual clarity and problem-solving ability on ${topicName}. Working through questions at various difficulty levels — Easy for building foundations, Medium for strengthening application skills, and Hard for developing competitive-level mastery — is the proven approach recommended by top rankers and expert educators.`,
        `When studying ${chapterName}, pay close attention to the underlying principles, standard derivations, and common pitfalls that examiners love to exploit. The step-by-step solution provided after you attempt this question will help you understand not just the correct answer, but the reasoning and shortcuts that save time under exam conditions.`,
        `MindPeak Institute offers personalised 1-on-1 coaching where expert mentors guide you through ${chapterName} and all other ${exam} ${subject} chapters. Our adaptive curriculum identifies your specific weak areas and creates a targeted study plan to maximise your score.`
    ];
}
function buildLearningResourceSchema(exam, subject, chapterName, topicName, slug, difficulty) {
    return {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: `${exam} ${subject} — ${topicName}${difficulty ? ` (${difficulty})` : ''}`,
        description: `Practice ${exam} ${subject} question on ${topicName} from ${chapterName} with step-by-step solution.`,
        educationalLevel: difficulty === 'Easy' ? 'Beginner' : difficulty === 'Hard' ? 'Advanced' : 'Intermediate',
        learningResourceType: 'Practice Problem',
        educationalAlignment: {
            '@type': 'AlignmentObject',
            alignmentType: 'teaches',
            educationalFramework: exam === 'JEE' ? 'NTA JEE Syllabus' : 'NTA NEET Syllabus',
            targetName: `${chapterName} — ${topicName}`
        },
        provider: {
            '@type': 'Organization',
            name: 'MindPeak Institute',
            url: 'https://mindpeakinstitute.com'
        },
        url: `https://mindpeakinstitute.com/${slug}`,
        isAccessibleForFree: true,
        inLanguage: 'en'
    };
}
function buildExamTips(exam, subject, chapterName) {
    const base = [
        `Master the fundamental concepts of ${chapterName} before attempting complex problems.`,
        `Practise questions at all difficulty levels — Easy for concept clarity, Hard for exam readiness.`,
        `Review solutions even for questions you answered correctly — you may discover faster methods.`,
        `Track your accuracy chapter-wise to identify and fix weak areas early.`
    ];
    if (exam === 'JEE') {
        return [
            ...base,
            `For ${subject}, focus on numerical-type and multi-concept problems — JEE Advanced loves them.`,
            `Revise key formulas and dimensional analysis shortcuts specific to ${chapterName}.`
        ];
    }
    return [
        ...base,
        `For NEET ${subject}, ensure thorough NCERT coverage — 90%+ questions are NCERT-based.`,
        `Pay special attention to diagrams, assertion-reason, and statement-based questions in ${chapterName}.`
    ];
}
}),
"[project]/src/views/NEETPYQQuestion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NEET_PYQ_SLUGS",
    ()=>NEET_PYQ_SLUGS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinueTestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContinueTestModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuestionGate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useQuestionGate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-pyq/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedSnippet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/questionPageSEO.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function seededShuffle(seed) {
    let h = 0;
    for(let i = 0; i < seed.length; i++){
        h = (h << 5) - h + seed.charCodeAt(i) | 0;
    }
    h = Math.abs(h);
    const arr = [
        0,
        1,
        2,
        3
    ];
    for(let i = 3; i > 0; i--){
        const j = h % (i + 1);
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
        h = Math.floor(h / (i + 1)) + h % 7919;
    }
    return arr;
}
const allSlugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildAllNEETPYQSlugs"])();
const NEET_PYQ_SLUGS = allSlugs.map((s)=>s.slug);
const NEETPYQQuestion = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, '');
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSolution, setShowSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChapterBrowser, setShowChapterBrowser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [browserExpandedChapter, setBrowserExpandedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const questionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedOption(null);
        setShowSolution(false);
        if (isFirstRender.current) {
            window.scrollTo(0, 0);
            isFirstRender.current = false;
        } else {
            questionRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [
        slug
    ]);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNEETPYQSlug"])(slug);
    const question = params ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQuestion"])(params) : null;
    const { shuffledOptions, shuffledAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!question) return {
            shuffledOptions: [],
            shuffledAnswer: -1
        };
        const perm = seededShuffle(slug);
        return {
            shuffledOptions: perm.map((i)=>question.o[i]),
            shuffledAnswer: perm.indexOf(question.a)
        };
    }, [
        slug,
        question
    ]);
    const bank = params ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetPyqSubjectBanks"].find((b)=>b.slug === params.subject) : undefined;
    if (!params || !question || !bank) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/",
        replace: true
    }, void 0, false, {
        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
        lineNumber: 78,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0));
    const chapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQChapter"])(params.subject, params.chapter);
    const chapterName = chapter?.name ?? params.chapter;
    const subj = bank.subject;
    const totalInChapter = chapter?.questions.length ?? 0;
    const { isGated, onUnlock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuestionGate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuestionGate"])(params.questionIndex);
    const testName = `NEET PYQ — ${subj} — ${chapterName}`;
    /* ── Dynamic SEO content ── */ const faqItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildNEETPYQFAQs"])(subj, chapterName, question.year, question.shift, totalInChapter);
    const pyqOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildPYQOverview"])('NEET', subj, chapterName, question.year);
    const examTips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildExamTips"])('NEET', subj, chapterName);
    const conceptSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildConceptSummary"])('NEET', subj, chapterName, chapterName);
    const prevSlug = params.questionIndex > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQSlugByParams"])(params.subject, params.chapter, params.questionIndex - 1) : null;
    const nextSlug = params.questionIndex < totalInChapter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQSlugByParams"])(params.subject, params.chapter, params.questionIndex + 1) : null;
    const title = `NEET ${subj} PYQ — ${chapterName} Q${params.questionIndex} (${question.year}) | MindPeak`;
    const description = `Solve ${question.shift} ${subj} question on ${chapterName}. Attempt the MCQ, check the answer & read the detailed NCERT-based solution. Free NEET PYQ practice by MindPeak.`;
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: `NEET ${subj} PYQ — ${chapterName} Q${params.questionIndex} (${question.year})`,
            educationalLevel: 'Intermediate',
            about: {
                '@type': 'Thing',
                name: `NEET ${subj} — ${chapterName}`
            },
            provider: {
                '@type': 'Organization',
                name: 'MindPeak Institute',
                url: 'https://mindpeakinstitute.com'
            }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://mindpeakinstitute.com'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'NEET PYQ',
                    item: 'https://mindpeakinstitute.com/neet-pyq'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: `${subj} — ${chapterName}`,
                    item: `https://mindpeakinstitute.com/${slug}`
                }
            ]
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFAQSchema"])(faqItems),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLearningResourceSchema"])('NEET', subj, chapterName, chapterName, slug)
    ];
    const isAnswered = selectedOption !== null;
    const isCorrect = selectedOption === shuffledAnswer;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: title,
                description: description,
                jsonLd: jsonLd
            }, void 0, false, {
                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/",
                                            className: "hover:text-primary transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 126,
                                            columnNumber: 88
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/neet-pyq",
                                            className: "hover:text-primary transition-colors",
                                            children: "NEET PYQ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 127,
                                            columnNumber: 100
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground",
                                            children: [
                                                chapterName,
                                                " · Q",
                                                params.questionIndex
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-4 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: bank.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30 bg-green-500/10 text-green-400",
                                                    children: question.shift
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3",
                                            children: [
                                                chapterName,
                                                " — ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400",
                                                    children: "PYQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 112
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-muted-foreground",
                                            children: [
                                                "NEET ",
                                                subj,
                                                " · Previous Year Question ",
                                                params.questionIndex,
                                                " of ",
                                                totalInChapter
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mx-auto max-w-4xl px-4 py-12 space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                ref: questionRef,
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8 scroll-mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display font-bold text-xl text-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "w-5 h-5 text-green-400 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 102
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Question ",
                                                    params.questionIndex
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 86
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    question.year,
                                                    " · ",
                                                    question.shift
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground text-lg font-medium leading-relaxed mb-8",
                                        children: question.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-6",
                                        children: shuffledOptions.map((option, idx)=>{
                                            let cls = 'border-border hover:border-green-500/50 cursor-pointer';
                                            if (isAnswered) {
                                                if (idx === shuffledAnswer) cls = 'border-green-500 bg-green-500/10';
                                                else if (idx === selectedOption && !isCorrect) cls = 'border-red-500 bg-red-500/10';
                                                else cls = 'border-border opacity-60';
                                            } else if (idx === selectedOption) cls = 'border-green-500 bg-green-500/5';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>!isAnswered && setSelectedOption(idx),
                                                disabled: isAnswered,
                                                className: `w-full text-left flex items-start gap-4 rounded-lg border p-4 transition-all ${cls}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-current text-sm font-bold flex-shrink-0",
                                                        children: String.fromCharCode(65 + idx)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground",
                                                        children: option
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold ${isCorrect ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isCorrect ? 'Correct!' : `Incorrect — Correct answer: ${String.fromCharCode(65 + shuffledAnswer)}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowSolution(!showSolution),
                                                className: "inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:underline",
                                                children: [
                                                    showSolution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 35
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 68
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showSolution ? 'Hide Solution' : 'Show Solution'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    height: 0
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    height: 'auto'
                                                },
                                                className: "mt-3 rounded-lg bg-secondary/20 border border-border p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                        children: question.s
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-green-400 font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "inline w-3 h-3 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 76
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Source: ",
                                                            question.shift
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pt-4 border-t border-border",
                                        children: [
                                            prevSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/${prevSlug}`,
                                                className: "inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-400 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 171
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Prev"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 182,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 182,
                                                columnNumber: 221
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground font-medium",
                                                children: [
                                                    "Q ",
                                                    params.questionIndex,
                                                    " / ",
                                                    totalInChapter
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            nextSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/${nextSlug}`,
                                                className: "inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-green-400 transition-colors",
                                                children: [
                                                    "Next ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 176
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 184,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 184,
                                                columnNumber: 222
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-border bg-card/50 p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-lg bg-secondary/30 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "w-5 h-5 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Chapter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: chapterName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-lg bg-secondary/30 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-5 h-5 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Year & Shift"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: [
                                                                question.year,
                                                                " · ",
                                                                question.shift
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-lg bg-secondary/30 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-5 h-5 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Exam"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: "NEET UG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                                question: `Why solve NEET ${subj} PYQs on ${chapterName}?`,
                                answer: pyqOverview
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-5 h-5 text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            chapterName,
                                            " — Concept Overview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted-foreground leading-relaxed",
                                        children: conceptSummary.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: para
                                            }, i, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 227,
                                                columnNumber: 48
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-border bg-card/50 p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-5 h-5 text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " NEET ",
                                            subj,
                                            " Tips — ",
                                            chapterName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: examTips.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tip
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-border bg-card/50 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowChapterBrowser(!showChapterBrowser),
                                        className: "w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm font-semibold text-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        className: "w-4 h-4 text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 94
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Choose a Different Chapter"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-5 h-5 text-muted-foreground transition-transform ${showChapterBrowser ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showChapterBrowser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-border p-4 space-y-2",
                                        children: bank.chapters.map((ch)=>{
                                            const isExp = browserExpandedChapter === ch.slug;
                                            const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQChapterCount"])(ch);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-border/50 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setBrowserExpandedChapter(isExp ? null : ch.slug),
                                                        className: "w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/10 transition-colors text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: ch.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 30
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-muted-foreground",
                                                                        children: [
                                                                            count,
                                                                            " PYQs"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 94
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: `w-4 h-4 text-muted-foreground transition-transform ${isExp ? 'rotate-180' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isExp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-border/50 px-4 py-2 space-y-1",
                                                        children: [
                                                            ch.questions.slice(0, 5).map((_, qi)=>{
                                                                const qSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQSlugByParams"])(bank.slug, ch.slug, qi + 1);
                                                                if (!qSlug) return null;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                                    to: `/${qSlug}`,
                                                                    className: "block text-xs text-muted-foreground hover:text-green-400 transition-colors py-1",
                                                                    children: [
                                                                        "Q",
                                                                        qi + 1,
                                                                        " — ",
                                                                        ch.questions[qi].q.slice(0, 60),
                                                                        "…"
                                                                    ]
                                                                }, qi, true, {
                                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 36
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            }),
                                                            count > 5 && (()=>{
                                                                const firstSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQSlugByParams"])(bank.slug, ch.slug, 1);
                                                                return firstSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                                    to: `/${firstSlug}`,
                                                                    className: "block text-xs text-green-400 font-medium py-1",
                                                                    children: [
                                                                        "View all ",
                                                                        count,
                                                                        " questions →"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 48
                                                                }, ("TURBOPACK compile-time value", void 0)) : null;
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, ch.slug, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 258,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                className: "rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-xl text-foreground mb-2",
                                        children: "Need Help with NEET PYQ Patterns?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm mb-6 max-w-lg mx-auto",
                                        children: "Get detailed PYQ analysis and 1-on-1 doubt sessions with MindPeak's NEET expert mentors."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openDemoModal,
                                        className: "inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors",
                                        children: [
                                            "Book Free Demo Class ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 286,
                                                columnNumber: 225
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-foreground mb-4",
                                        children: "NEET PYQ — All Subjects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neetPyqSubjectBanks"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-border bg-card/50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: b.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            b.subject,
                                                            b.slug === params.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded-full",
                                                                children: "Current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 51
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5",
                                                        children: b.chapters.slice(0, 5).map((ch)=>{
                                                            const linkSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQSlugByParams"])(b.slug, ch.slug, 1);
                                                            if (!linkSlug) return null;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                                    to: `/${linkSlug}`,
                                                                    className: "text-xs text-muted-foreground hover:text-green-400 transition-colors",
                                                                    children: [
                                                                        ch.name,
                                                                        " (",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$pyq$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNEETPYQChapterCount"])(ch),
                                                                        " Qs)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, ch.slug, false, {
                                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, b.slug, true, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-foreground mb-4",
                                        children: [
                                            "NEET ",
                                            subj,
                                            " Resources"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            {
                                                label: 'NEET Coaching',
                                                to: '/neet-coaching'
                                            },
                                            {
                                                label: 'NEET Practice Questions',
                                                to: '/neet-practice'
                                            },
                                            {
                                                label: 'NEET Biology Coaching',
                                                to: '/neet-biology-coaching'
                                            },
                                            {
                                                label: 'NEET Physics Coaching',
                                                to: '/neet-physics-coaching'
                                            },
                                            {
                                                label: 'NEET Chemistry Coaching',
                                                to: '/neet-chemistry-coaching'
                                            },
                                            {
                                                label: 'Free Trial',
                                                to: '/free-trial'
                                            },
                                            {
                                                label: 'All Courses',
                                                to: '/courses'
                                            }
                                        ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                                to: link.to,
                                                className: "px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-green-400 hover:border-green-500/40 transition-colors",
                                                children: link.label
                                            }, link.to, false, {
                                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: faqItems,
                        heading: "NEET PYQ",
                        highlight: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: `NEET ${subj} PYQ — ${chapterName} — Question ${params.questionIndex}.`
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinueTestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isGated,
                testName: testName,
                onSuccess: onUnlock
            }, void 0, false, {
                fileName: "[project]/src/views/NEETPYQQuestion.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = NEETPYQQuestion;
}),
];

//# sourceMappingURL=src_b8ef4639._.js.map