(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ContinueTestModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';
const ContinueTestModal = ({ isOpen, testName, onSuccess })=>{
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const conversionFired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const fireConversion = ()=>{
        try {
            if (conversionFired.current) return;
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    send_to: 'AW-17962731707/_Uc-CL7_g_sbELuRpvVC',
                    value: 1.0,
                    currency: 'INR'
                });
                conversionFired.current = true;
            }
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("You're all set! Continue your practice.");
            // Auto-dismiss after a short delay
            setTimeout(()=>{
                onSuccess();
            }, 1200);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Something went wrong. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative px-6 pt-6 pb-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-foreground text-xl sm:text-2xl",
                                        children: [
                                            "Continue with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm",
                                children: "You've completed 4 free questions! Fill in your details to unlock all questions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContinueTestModal.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5",
                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-14 h-14 text-green-400 mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display font-bold text-foreground text-lg",
                                    children: "You're Unlocked!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-name",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Full Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-phone",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Phone Number ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gate-email",
                                            className: "block text-sm font-medium text-foreground mb-1.5",
                                            children: [
                                                "Email ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContinueTestModal.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(ContinueTestModal, "xOx23Sgub24w5xl8t7ulU4jLubc=");
_c = ContinueTestModal;
const __TURBOPACK__default__export__ = ContinueTestModal;
var _c;
__turbopack_context__.k.register(_c, "ContinueTestModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useQuestionGate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuestionGate",
    ()=>useQuestionGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = 'mp_gate_unlocked';
const VIEWED_KEY = 'mp_gate_viewed';
const FREE_LIMIT = 4;
function useQuestionGate(_questionIndex) {
    _s();
    const isAlreadyUnlocked = (()=>{
        try {
            return localStorage.getItem(STORAGE_KEY) === '1';
        } catch  {
            return false;
        }
    })();
    const [unlocked, setUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isAlreadyUnlocked);
    // Gate always starts false — never block the very first render
    const [isGated, setIsGated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Current page path — unique identifier for this question
    const pagePath = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuestionGate.useEffect": ()=>{
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
        }
    }["useQuestionGate.useEffect"], [
        pagePath,
        unlocked
    ]);
    const onUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuestionGate.useCallback[onUnlock]": ()=>{
            setUnlocked(true);
            setIsGated(false);
            try {
                localStorage.setItem(STORAGE_KEY, '1');
            } catch  {
            // localStorage unavailable
            }
        }
    }["useQuestionGate.useCallback[onUnlock]"], []);
    return {
        isGated,
        onUnlock
    };
}
_s(useQuestionGate, "s8rxX3xtADShCIL730xy94zKhYA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/slugify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/neet-practice/biology-botany.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "botanyChapters",
    ()=>botanyChapters
]);
/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — BOTANY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */ /* ──── Chapter 1: Plant Diversity & Morphology ──── */ const plantDiversity = {
    name: 'Plant Diversity & Morphology',
    slug: 'plant-diversity-morphology',
    topics: [
        {
            name: 'Plant Kingdom Classification',
            slug: 'plant-kingdom',
            easy: [
                {
                    q: 'Which division of plants is known as "amphibians of the plant kingdom"?',
                    o: [
                        'Pteridophyta',
                        'Bryophyta',
                        'Gymnosperms',
                        'Angiosperms'
                    ],
                    a: 1,
                    s: 'Bryophytes are called amphibians of the plant kingdom because they live on land but need water for reproduction (transfer of male gametes).'
                },
                {
                    q: 'Gymnosperms differ from angiosperms in that they lack:',
                    o: [
                        'Seeds',
                        'Fruits',
                        'Roots',
                        'Leaves'
                    ],
                    a: 1,
                    s: 'Gymnosperms have "naked seeds" — they lack fruits. Seeds are not enclosed in an ovary wall. Angiosperms (flowering plants) produce fruits from the ovary.'
                },
                {
                    q: 'Alternation of generations is found in:',
                    o: [
                        'All plants',
                        'Only bryophytes',
                        'Only pteridophytes',
                        'Only angiosperms'
                    ],
                    a: 0,
                    s: 'All plants show alternation of generations — alternating between a diploid sporophyte and a haploid gametophyte generation. The dominant generation varies across groups.'
                },
                {
                    q: 'Which of the following is a non-vascular plant?',
                    o: [
                        'Fern',
                        'Moss',
                        'Pine',
                        'Rose'
                    ],
                    a: 1,
                    s: 'Mosses (Bryophyta) are non-vascular — they lack xylem and phloem. Ferns (Pteridophyta), pines (Gymnosperms), and roses (Angiosperms) are all vascular plants.'
                },
                {
                    q: 'Heterospory is first observed in:',
                    o: [
                        'Bryophytes',
                        'Pteridophytes',
                        'Gymnosperms',
                        'Angiosperms'
                    ],
                    a: 1,
                    s: 'Heterospory (production of two types of spores — microspores and megaspores) first evolved in pteridophytes like Selaginella and Salvinia.'
                }
            ],
            medium: [
                {
                    q: 'In bryophytes, the dominant generation is:',
                    o: [
                        'Sporophyte',
                        'Gametophyte',
                        'Both are equal',
                        'Depends on species'
                    ],
                    a: 1,
                    s: 'In bryophytes, the gametophyte (n) is the dominant, independent, photosynthetic generation. The sporophyte (2n) is dependent on the gametophyte for nutrition.'
                },
                {
                    q: 'Sori are reproductive structures found in:',
                    o: [
                        'Mosses',
                        'Ferns',
                        'Gymnosperms',
                        'Fungi'
                    ],
                    a: 1,
                    s: 'Sori are clusters of sporangia found on the underside of fern fronds. They are covered by a protective indusium and produce spores by meiosis.'
                },
                {
                    q: 'Double fertilization is a unique feature of:',
                    o: [
                        'Bryophytes',
                        'Gymnosperms',
                        'Angiosperms',
                        'Pteridophytes'
                    ],
                    a: 2,
                    s: 'Double fertilization occurs only in angiosperms: one sperm fuses with egg (→ zygote), another fuses with two polar nuclei (→ triploid endosperm). Discovered by Nawaschin.'
                },
                {
                    q: 'Archegonia and antheridia are found in:',
                    o: [
                        'Angiosperms only',
                        'Bryophytes and pteridophytes',
                        'Gymnosperms only',
                        'Algae only'
                    ],
                    a: 1,
                    s: 'Archegonia (female) and antheridia (male) are multicellular sex organs found in bryophytes, pteridophytes, and some gymnosperms. Angiosperms have lost these structures.'
                },
                {
                    q: 'The plant body of a moss is:',
                    o: [
                        'Differentiated into root, stem, and leaves',
                        'Thallus-like without differentiation',
                        'Differentiated into stem and leaf-like structures with rhizoids',
                        'A sporophyte dependent on gametophyte'
                    ],
                    a: 2,
                    s: 'Moss gametophyte has stem-like axis, leaf-like appendages, and rhizoids (not true roots). It lacks true vascular tissues but has a leafy appearance.'
                },
                {
                    q: 'Which of the following is a gymnosperm?',
                    o: [
                        'Pinus',
                        'Funaria',
                        'Dryopteris',
                        'Hibiscus'
                    ],
                    a: 0,
                    s: 'Pinus (pine) is a gymnosperm with naked seeds in cones. Funaria is a bryophyte (moss), Dryopteris is a pteridophyte (fern), and Hibiscus is an angiosperm.'
                }
            ],
            hard: [
                {
                    q: 'In the life cycle of a fern, the prothallus is:',
                    o: [
                        'Sporophyte, diploid',
                        'Gametophyte, haploid',
                        'Sporophyte, haploid',
                        'Gametophyte, diploid'
                    ],
                    a: 1,
                    s: 'The prothallus is the small, heart-shaped, haploid gametophyte of ferns. It is independent, photosynthetic, and bears antheridia and archegonia on its underside.'
                },
                {
                    q: 'Xylem vessels are absent in:',
                    o: [
                        'Angiosperms',
                        'Gymnosperms',
                        'Pteridophytes',
                        'Both gymnosperms and pteridophytes'
                    ],
                    a: 1,
                    s: 'Gymnosperms lack vessels in xylem (except Gnetales). They have tracheids only. Angiosperms have both vessels and tracheids. Some primitive angiosperms also lack vessels.'
                },
                {
                    q: 'The female gametophyte of angiosperms is called:',
                    o: [
                        'Megaspore mother cell',
                        'Embryo sac',
                        'Archegonium',
                        'Nucellus'
                    ],
                    a: 1,
                    s: 'The embryo sac is the female gametophyte of angiosperms. It develops from the megaspore and typically contains 7 cells and 8 nuclei (Polygonum type).'
                },
                {
                    q: 'Which pteridophyte is known as a "living fossil"?',
                    o: [
                        'Adiantum',
                        'Psilotum',
                        'Dryopteris',
                        'Selaginella'
                    ],
                    a: 1,
                    s: 'Psilotum is considered a living fossil because it resembles the earliest vascular plants (Rhynia). It lacks true roots and leaves, having only rhizomes and scale-like enations.'
                },
                {
                    q: 'Protonema is a juvenile stage in the life cycle of:',
                    o: [
                        'Fern',
                        'Moss',
                        'Pine',
                        'Marchantia'
                    ],
                    a: 1,
                    s: 'Protonema is the filamentous, juvenile stage of the moss gametophyte. It develops from the germinating spore and gives rise to the leafy gametophore by budding.'
                }
            ]
        },
        {
            name: 'Plant Morphology & Anatomy',
            slug: 'morphology-anatomy',
            easy: [
                {
                    q: 'The edible part of a mango is:',
                    o: [
                        'Pericarp (mesocarp)',
                        'Endosperm',
                        'Seed',
                        'Thalamus'
                    ],
                    a: 0,
                    s: 'In mango, the edible part is the fleshy mesocarp (middle layer of pericarp). The outer epicarp is the skin, and the inner endocarp is the hard stone surrounding the seed.'
                },
                {
                    q: 'Phloem is responsible for:',
                    o: [
                        'Water transport',
                        'Food transport',
                        'Gaseous exchange',
                        'Support'
                    ],
                    a: 1,
                    s: 'Phloem transports organic food (sucrose) from source (leaves) to sink (roots, fruits, seeds). This process is called translocation. Xylem transports water and minerals.'
                },
                {
                    q: 'Stomata are mainly found on:',
                    o: [
                        'Upper surface of dorsiventral leaves',
                        'Lower surface of dorsiventral leaves',
                        'Roots',
                        'Bark'
                    ],
                    a: 1,
                    s: 'In dorsiventral (dicot) leaves, stomata are mainly on the lower epidermis (hypostomatic). This reduces water loss from direct sunlight. Isobilateral (monocot) leaves have them on both surfaces.'
                },
                {
                    q: 'Tap root system is characteristic of:',
                    o: [
                        'Monocots',
                        'Dicots',
                        'Both monocots and dicots',
                        'Bryophytes'
                    ],
                    a: 1,
                    s: 'Dicots typically have a tap root system with a primary root that grows vertically and gives off lateral branches. Monocots have a fibrous root system.'
                },
                {
                    q: 'Collenchyma provides:',
                    o: [
                        'Flexibility and mechanical support',
                        'Food storage',
                        'Water transport',
                        'Photosynthesis'
                    ],
                    a: 0,
                    s: 'Collenchyma is a living tissue that provides flexible mechanical support to growing parts of plants. It has unevenly thickened cell walls with pectin and cellulose.'
                }
            ],
            medium: [
                {
                    q: 'Casparian strips are found in:',
                    o: [
                        'Epidermis',
                        'Endodermis',
                        'Pericycle',
                        'Cortex'
                    ],
                    a: 1,
                    s: 'Casparian strips are bands of suberin on the radial and tangential walls of endodermal cells. They force water and minerals to pass through the symplast, regulating ion uptake.'
                },
                {
                    q: 'The vascular bundle in monocot stem is:',
                    o: [
                        'Open and collateral',
                        'Closed and scattered',
                        'Open and bicollateral',
                        'Closed and arranged in a ring'
                    ],
                    a: 1,
                    s: 'Monocot stems have closed vascular bundles (no cambium, so no secondary growth) scattered throughout the ground tissue. Dicot stems have open bundles arranged in a ring.'
                },
                {
                    q: 'Palisade mesophyll is responsible for:',
                    o: [
                        'Gas exchange',
                        'Maximum photosynthesis',
                        'Water storage',
                        'Structural support'
                    ],
                    a: 1,
                    s: 'Palisade mesophyll cells are elongated, tightly packed cells in the upper portion of the leaf. They contain the most chloroplasts and carry out maximum photosynthesis.'
                },
                {
                    q: 'Secondary growth in dicot stems is due to:',
                    o: [
                        'Apical meristem',
                        'Vascular cambium and cork cambium',
                        'Intercalary meristem',
                        'Protoderm'
                    ],
                    a: 1,
                    s: 'Secondary growth (increase in girth) is due to lateral meristems: vascular cambium (produces secondary xylem and phloem) and cork cambium (produces bark).'
                },
                {
                    q: 'Companion cells are associated with:',
                    o: [
                        'Vessels',
                        'Sieve tubes',
                        'Tracheids',
                        'Fibres'
                    ],
                    a: 1,
                    s: 'Companion cells are closely associated with sieve tube elements in phloem of angiosperms. They provide metabolic support (ATP, proteins) to the enucleate sieve tubes.'
                },
                {
                    q: 'The Kranz anatomy is characteristic of:',
                    o: [
                        'C₃ plants',
                        'C₄ plants',
                        'CAM plants',
                        'All plants'
                    ],
                    a: 1,
                    s: 'Kranz anatomy (wreath-like arrangement of bundle sheath cells with chloroplasts around vascular bundles) is characteristic of C₄ plants like maize, sugarcane, and sorghum.'
                }
            ],
            hard: [
                {
                    q: 'Passage cells in the endodermis are found opposite to:',
                    o: [
                        'Phloem',
                        'Xylem (protoxylem)',
                        'Pith',
                        'Cortex'
                    ],
                    a: 1,
                    s: 'Passage cells are thin-walled endodermal cells without Casparian strip thickening, found opposite protoxylem poles. They allow passage of water from cortex to vascular cylinder.'
                },
                {
                    q: 'In a dorsiventral leaf, the arrangement from upper to lower surface is:',
                    o: [
                        'Upper epidermis → palisade → spongy → lower epidermis',
                        'Upper epidermis → spongy → palisade → lower epidermis',
                        'Palisade on both sides with spongy in middle',
                        'Random arrangement'
                    ],
                    a: 0,
                    s: 'Dorsiventral leaf (dicot): upper epidermis → palisade mesophyll (2-3 layers, tightly packed) → spongy mesophyll (loosely arranged with air spaces) → lower epidermis with stomata.'
                },
                {
                    q: 'Heartwood differs from sapwood in that:',
                    o: [
                        'It conducts water',
                        'It is darker and contains deposited tannins and resins',
                        'It has living cells',
                        'It is the outer wood'
                    ],
                    a: 1,
                    s: 'Heartwood (duramen) is the inner, older, non-functional wood. It is darker due to deposition of tannins, resins, oils, and gums. Sapwood (alburnum) is outer, lighter, and conducts water.'
                },
                {
                    q: 'Transfusion tissue is found in leaves of:',
                    o: [
                        'Ferns',
                        'Pinus (gymnosperms)',
                        'Dicots',
                        'Monocots'
                    ],
                    a: 1,
                    s: 'Transfusion tissue is a specialized tissue in gymnosperm (Pinus) needles surrounding the vascular bundle. It consists of tracheids and parenchyma cells that help in lateral transport.'
                },
                {
                    q: 'Which tissue has lignified walls and is dead at maturity?',
                    o: [
                        'Collenchyma',
                        'Sclerenchyma',
                        'Chlorenchyma',
                        'Aerenchyma'
                    ],
                    a: 1,
                    s: 'Sclerenchyma cells have heavily lignified, thick secondary walls and are dead at maturity. They provide rigid mechanical support. Includes fibres (elongated) and sclereids (short, irregular).'
                }
            ]
        }
    ]
};
/* ──── Chapter 2: Cell Biology & Biomolecules ──── */ const cellBiology = {
    name: 'Cell Biology & Biomolecules',
    slug: 'cell-biology-biomolecules',
    topics: [
        {
            name: 'Cell Structure & Organelles',
            slug: 'cell-organelles',
            easy: [
                {
                    q: 'The powerhouse of the cell is:',
                    o: [
                        'Nucleus',
                        'Mitochondria',
                        'Ribosome',
                        'Golgi body'
                    ],
                    a: 1,
                    s: 'Mitochondria are called the powerhouse because they produce ATP through oxidative phosphorylation (aerobic respiration). They have their own DNA and ribosomes.'
                },
                {
                    q: 'Which organelle is involved in protein synthesis?',
                    o: [
                        'Lysosome',
                        'Ribosome',
                        'Smooth ER',
                        'Vacuole'
                    ],
                    a: 1,
                    s: 'Ribosomes are the sites of protein synthesis (translation). They read mRNA and join amino acids by peptide bonds. Found free in cytoplasm or attached to rough ER.'
                },
                {
                    q: 'Cell wall is absent in:',
                    o: [
                        'Plant cells',
                        'Bacterial cells',
                        'Animal cells',
                        'Fungal cells'
                    ],
                    a: 2,
                    s: 'Animal cells lack a cell wall. They have only a cell membrane (plasma membrane). Plant cells have cellulose walls, bacteria have peptidoglycan, fungi have chitin walls.'
                },
                {
                    q: 'The Golgi apparatus is involved in:',
                    o: [
                        'DNA replication',
                        'Packaging and secretion of proteins',
                        'Photosynthesis',
                        'ATP production'
                    ],
                    a: 1,
                    s: 'Golgi apparatus (dictyosomes in plants) modifies, packages, and sorts proteins and lipids for transport or secretion. It forms vesicles, lysosomes, and cell plate during cell division.'
                },
                {
                    q: 'Prokaryotic cells differ from eukaryotic cells in lacking:',
                    o: [
                        'DNA',
                        'Ribosomes',
                        'Membrane-bound nucleus',
                        'Cell membrane'
                    ],
                    a: 2,
                    s: 'Prokaryotes lack a membrane-bound nucleus (DNA is in a nucleoid region), and generally lack membrane-bound organelles like mitochondria, ER, and Golgi. They have 70S ribosomes.'
                }
            ],
            medium: [
                {
                    q: 'The fluid mosaic model of cell membrane was proposed by:',
                    o: [
                        'Watson and Crick',
                        'Singer and Nicolson',
                        'Schleiden and Schwann',
                        'Robertson'
                    ],
                    a: 1,
                    s: 'Singer and Nicolson (1972) proposed the fluid mosaic model: a phospholipid bilayer with embedded integral and peripheral proteins that can move laterally (fluid) in a mosaic pattern.'
                },
                {
                    q: 'Smooth endoplasmic reticulum is the site of:',
                    o: [
                        'Protein synthesis',
                        'Lipid synthesis and detoxification',
                        'DNA replication',
                        'Photosynthesis'
                    ],
                    a: 1,
                    s: 'SER synthesizes lipids, steroids (including hormones in endocrine cells), and is involved in detoxification of drugs and poisons (especially in liver cells). It lacks ribosomes.'
                },
                {
                    q: '9+2 arrangement of microtubules is found in:',
                    o: [
                        'Centrioles',
                        'Cilia and flagella',
                        'Spindle fibres',
                        'Chromosomes'
                    ],
                    a: 1,
                    s: 'Cilia and flagella have a 9+2 axoneme pattern: 9 peripheral doublets + 2 central singlets, held by nexin and radial spokes. Centrioles and basal bodies have 9+0 (9 triplets, no central).'
                },
                {
                    q: 'Lysosomes are formed from:',
                    o: [
                        'Rough ER',
                        'Golgi apparatus',
                        'Smooth ER',
                        'Mitochondria'
                    ],
                    a: 1,
                    s: 'Lysosomes are formed by budding from the trans face of the Golgi apparatus. Their hydrolytic enzymes are synthesized in rough ER, processed in Golgi, and packaged into lysosomes.'
                },
                {
                    q: 'The semi-autonomous organelles of the cell are:',
                    o: [
                        'Ribosomes and lysosomes',
                        'Mitochondria and chloroplasts',
                        'ER and Golgi',
                        'Nucleus and ribosome'
                    ],
                    a: 1,
                    s: 'Mitochondria and chloroplasts are semi-autonomous because they have their own circular DNA, 70S ribosomes, and can self-replicate. They evolved from endosymbiotic prokaryotes.'
                },
                {
                    q: 'Which cell organelle is known as the suicide bag?',
                    o: [
                        'Ribosome',
                        'Lysosome',
                        'Peroxisome',
                        'Centrosome'
                    ],
                    a: 1,
                    s: 'Lysosomes are called "suicide bags" because they can release their digestive enzymes (acid hydrolases) into the cell cytoplasm, causing autolysis (self-destruction) during cellular damage.'
                }
            ],
            hard: [
                {
                    q: 'The signal hypothesis for protein targeting to ER was proposed by:',
                    o: [
                        'Singer and Nicolson',
                        'Blobel and Sabatini',
                        'Watson and Crick',
                        'De Duve'
                    ],
                    a: 1,
                    s: 'Blobel and Sabatini (1971) proposed the signal hypothesis: proteins destined for secretion have an N-terminal signal peptide that directs the ribosome to ER membrane via SRP (signal recognition particle).'
                },
                {
                    q: 'In a eukaryotic cell, the 80S ribosome consists of:',
                    o: [
                        '40S + 40S subunits',
                        '60S + 40S subunits',
                        '50S + 30S subunits',
                        '60S + 20S subunits'
                    ],
                    a: 1,
                    s: 'Eukaryotic (80S) ribosomes have a 60S large subunit (28S + 5.8S + 5S rRNA) and a 40S small subunit (18S rRNA). Prokaryotic 70S ribosomes have 50S + 30S subunits.'
                },
                {
                    q: 'Polyribosomes (polysomes) are:',
                    o: [
                        'Multiple ribosomes translating the same mRNA simultaneously',
                        'Ribosomes in the nucleus',
                        'Ribosomes bound to DNA',
                        'Free ribosomes in the cytoplasm only'
                    ],
                    a: 0,
                    s: 'Polyribosomes are clusters of ribosomes simultaneously translating the same mRNA molecule, producing multiple copies of the same polypeptide. This increases the efficiency of translation.'
                },
                {
                    q: 'The cis and trans faces of the Golgi apparatus are respectively also called:',
                    o: [
                        'Forming face and maturing face',
                        'Maturing face and forming face',
                        'Entry and exit faces',
                        'Both A and C'
                    ],
                    a: 3,
                    s: 'Cis face = forming face = entry face (receives vesicles from ER). Trans face = maturing face = exit face (sends vesicles to plasma membrane or lysosomes).'
                },
                {
                    q: 'Tonoplast is the membrane that bounds the:',
                    o: [
                        'Nucleus',
                        'Chloroplast',
                        'Vacuole',
                        'Mitochondria'
                    ],
                    a: 2,
                    s: 'Tonoplast is the single membrane that surrounds the central vacuole in plant cells. It regulates transport of ions and molecules between cytoplasm and vacuolar sap.'
                }
            ]
        },
        {
            name: 'Biomolecules & Enzymes',
            slug: 'biomolecules-enzymes',
            easy: [
                {
                    q: 'The monomer of proteins is:',
                    o: [
                        'Nucleotide',
                        'Amino acid',
                        'Fatty acid',
                        'Glucose'
                    ],
                    a: 1,
                    s: 'Proteins are polymers of amino acids joined by peptide bonds (CO-NH). There are 20 standard amino acids. The sequence of amino acids determines protein structure and function.'
                },
                {
                    q: 'Which of the following is a polysaccharide?',
                    o: [
                        'Glucose',
                        'Sucrose',
                        'Cellulose',
                        'Fructose'
                    ],
                    a: 2,
                    s: 'Cellulose is a polysaccharide — a polymer of β-D-glucose units linked by β(1→4) glycosidic bonds. Glucose and fructose are monosaccharides. Sucrose is a disaccharide.'
                },
                {
                    q: 'Enzymes are chemically:',
                    o: [
                        'Lipids',
                        'Carbohydrates',
                        'Proteins',
                        'Nucleic acids'
                    ],
                    a: 2,
                    s: 'Most enzymes are proteins (globular proteins). They act as biological catalysts that speed up reactions by lowering activation energy. A few catalytic RNAs (ribozymes) also exist.'
                },
                {
                    q: 'DNA is made up of which type of sugar?',
                    o: [
                        'Ribose',
                        'Deoxyribose',
                        'Glucose',
                        'Fructose'
                    ],
                    a: 1,
                    s: 'DNA contains deoxyribose sugar (lacks the -OH group at the 2\' carbon). RNA contains ribose sugar. This difference makes DNA more chemically stable than RNA.'
                },
                {
                    q: 'Which bond joins two amino acids?',
                    o: [
                        'Glycosidic bond',
                        'Peptide bond',
                        'Hydrogen bond',
                        'Phosphodiester bond'
                    ],
                    a: 1,
                    s: 'Peptide bond (CO-NH) is a covalent bond formed by condensation between the carboxyl group of one amino acid and the amino group of the next, releasing water.'
                }
            ],
            medium: [
                {
                    q: 'The lock and key model of enzyme action was proposed by:',
                    o: [
                        'Koshland',
                        'Emil Fischer',
                        'Michaelis and Menten',
                        'Buchner'
                    ],
                    a: 1,
                    s: 'Emil Fischer (1894) proposed the lock and key model: enzyme\'s active site (lock) is complementary in shape to the substrate (key). Koshland proposed the induced fit model.'
                },
                {
                    q: 'Competitive inhibition of an enzyme can be overcome by:',
                    o: [
                        'Increasing inhibitor concentration',
                        'Increasing substrate concentration',
                        'Decreasing temperature',
                        'Adding coenzymes'
                    ],
                    a: 1,
                    s: 'In competitive inhibition, the inhibitor competes with substrate for the active site. Increasing substrate concentration outcompetes the inhibitor, restoring enzyme activity (Vmax unchanged, Km increases).'
                },
                {
                    q: 'The primary structure of a protein is determined by:',
                    o: [
                        'Hydrogen bonds',
                        'Sequence of amino acids',
                        'Disulfide bonds',
                        'Hydrophobic interactions'
                    ],
                    a: 1,
                    s: 'Primary structure is the linear sequence of amino acids in a polypeptide chain, held together by peptide bonds. It determines all higher levels of protein folding.'
                },
                {
                    q: 'Which of the following is a reducing sugar?',
                    o: [
                        'Sucrose',
                        'Maltose',
                        'Cellulose',
                        'Starch'
                    ],
                    a: 1,
                    s: 'Maltose is a reducing sugar because it has a free anomeric carbon (hemiacetal) that can reduce Benedict\'s/Fehling\'s reagent. Sucrose is non-reducing (both anomeric carbons are involved in the glycosidic bond).'
                },
                {
                    q: 'The Km value of an enzyme represents:',
                    o: [
                        'Maximum velocity',
                        'Substrate concentration at half Vmax',
                        'Inhibitor concentration',
                        'Enzyme concentration'
                    ],
                    a: 1,
                    s: 'Km (Michaelis constant) is the substrate concentration at which the reaction velocity is half of Vmax. A low Km indicates high enzyme-substrate affinity.'
                },
                {
                    q: 'Phospholipids are amphipathic because they have:',
                    o: [
                        'Two fatty acid tails only',
                        'A hydrophilic head and hydrophobic tails',
                        'All polar groups',
                        'All non-polar groups'
                    ],
                    a: 1,
                    s: 'Phospholipids are amphipathic: a polar hydrophilic phosphate head (interacts with water) and two non-polar hydrophobic fatty acid tails (avoids water). This property drives membrane formation.'
                }
            ],
            hard: [
                {
                    q: 'Allosteric enzymes differ from simple enzymes in that they:',
                    o: [
                        'Have only one binding site',
                        'Have additional regulatory sites besides the active site',
                        'Do not follow Michaelis-Menten kinetics',
                        'Both B and C'
                    ],
                    a: 3,
                    s: 'Allosteric enzymes have regulatory (allosteric) sites in addition to active sites. Binding of modulators changes enzyme conformation. They show sigmoidal kinetics, not Michaelis-Menten hyperbolic curves.'
                },
                {
                    q: 'Chargaff\'s rule states that in DNA:',
                    o: [
                        'A+T = G+C always',
                        'A = T and G = C',
                        'A = G and T = C',
                        'Purines = Pyrimidines × 2'
                    ],
                    a: 1,
                    s: 'Chargaff\'s rule: A pairs with T and G pairs with C, so their molar ratios are equal (A=T, G=C). Consequently, total purines = total pyrimidines (A+G = T+C).'
                },
                {
                    q: 'The tertiary structure of a protein is stabilized by:',
                    o: [
                        'Peptide bonds only',
                        'Hydrogen bonds, disulfide bonds, ionic bonds, and hydrophobic interactions',
                        'Only disulfide bonds',
                        'Van der Waals forces only'
                    ],
                    a: 1,
                    s: 'Tertiary structure (3D folding) is stabilized by multiple non-covalent interactions: hydrogen bonds, ionic (salt bridges), hydrophobic interactions, and covalent disulfide bonds between cysteine residues.'
                },
                {
                    q: 'Ribozymes are:',
                    o: [
                        'Ribosomal proteins with enzymatic activity',
                        'RNA molecules with catalytic activity',
                        'Modified ribosomes',
                        'Enzymes that degrade RNA'
                    ],
                    a: 1,
                    s: 'Ribozymes are RNA molecules that act as enzymes (catalytic RNA). Examples include self-splicing introns, RNase P, and the peptidyl transferase activity of the ribosome (23S rRNA).'
                },
                {
                    q: 'The isoelectric point (pI) of an amino acid is the pH at which:',
                    o: [
                        'It is most soluble',
                        'It has no net charge and does not migrate in an electric field',
                        'It is most reactive',
                        'It denatures'
                    ],
                    a: 1,
                    s: 'At the isoelectric point (pI), the amino acid exists as a zwitterion with zero net charge. It does not migrate in an electric field. At pH < pI, it is positively charged; at pH > pI, negatively charged.'
                }
            ]
        }
    ]
};
/* ──── Chapter 3: Plant Physiology ──── */ const plantPhysiology = {
    name: 'Plant Physiology',
    slug: 'plant-physiology',
    topics: [
        {
            name: 'Photosynthesis',
            slug: 'photosynthesis',
            easy: [
                {
                    q: 'The site of light reactions in photosynthesis is:',
                    o: [
                        'Stroma',
                        'Thylakoid membrane',
                        'Cytoplasm',
                        'Inner membrane'
                    ],
                    a: 1,
                    s: 'Light reactions occur in the thylakoid membrane of chloroplasts where photosystems PS I and PS II, electron transport chain, and ATP synthase are located.'
                },
                {
                    q: 'The final electron acceptor in the light reactions is:',
                    o: [
                        'Water',
                        'NADP⁺',
                        'O₂',
                        'CO₂'
                    ],
                    a: 1,
                    s: 'NADP⁺ is the final electron acceptor in the light reactions (at PS I), getting reduced to NADPH. Water is the electron donor (at PS II), releasing O₂.'
                },
                {
                    q: 'The dark reactions of photosynthesis occur in:',
                    o: [
                        'Thylakoid membrane',
                        'Stroma',
                        'Cytoplasm',
                        'Nucleus'
                    ],
                    a: 1,
                    s: 'Dark reactions (Calvin cycle/light-independent reactions) occur in the stroma of chloroplasts, where CO₂ is fixed into glucose using ATP and NADPH from light reactions.'
                },
                {
                    q: 'Which pigment is primarily responsible for photosynthesis?',
                    o: [
                        'Carotenoids',
                        'Xanthophyll',
                        'Chlorophyll a',
                        'Chlorophyll b'
                    ],
                    a: 2,
                    s: 'Chlorophyll a is the primary photosynthetic pigment and the reaction centre pigment. Other pigments (Chl b, carotenoids, xanthophylls) are accessory pigments that transfer energy to Chl a.'
                },
                {
                    q: 'The net equation of photosynthesis is:',
                    o: [
                        '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
                        '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂',
                        'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
                        '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂'
                    ],
                    a: 3,
                    s: 'The correct balanced equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ (12 water molecules are used, 6 are released). O₂ comes from photolysis of water.'
                }
            ],
            medium: [
                {
                    q: 'RuBisCO is the enzyme that fixes CO₂ in:',
                    o: [
                        'C₃ cycle (Calvin cycle)',
                        'C₄ pathway (Hatch-Slack)',
                        'CAM pathway only',
                        'All three pathways'
                    ],
                    a: 0,
                    s: 'RuBisCO (Ribulose bisphosphate carboxylase/oxygenase) fixes CO₂ in the Calvin cycle (C₃ pathway) by combining CO₂ with RuBP to form 2 molecules of 3-PGA (3-phosphoglycerate).'
                },
                {
                    q: 'In C₄ plants, the primary CO₂ acceptor is:',
                    o: [
                        'RuBP',
                        'PEP (phosphoenolpyruvate)',
                        'OAA',
                        'Pyruvate'
                    ],
                    a: 1,
                    s: 'In C₄ plants (mesophyll cells), PEP carboxylase fixes CO₂ with PEP to form OAA (4-carbon compound). This is then converted to malate/aspartate and shuttled to bundle sheath cells.'
                },
                {
                    q: 'Cyclic photophosphorylation involves only:',
                    o: [
                        'PS II',
                        'PS I',
                        'Both PS I and PS II',
                        'Neither PS I nor PS II'
                    ],
                    a: 1,
                    s: 'Cyclic photophosphorylation involves only PS I (P700). Electrons from PS I are recycled back to PS I via the ETC, generating ATP but not NADPH. No O₂ is evolved and no NADP⁺ is reduced.'
                },
                {
                    q: 'The CO₂ compensation point is the concentration at which:',
                    o: [
                        'Photosynthesis equals zero',
                        'Photosynthesis equals respiration',
                        'Respiration equals zero',
                        'Maximum photosynthesis occurs'
                    ],
                    a: 1,
                    s: 'At the CO₂ compensation point, the rate of CO₂ fixation by photosynthesis equals the rate of CO₂ release by respiration. Net gas exchange is zero. C₄ plants have a lower compensation point.'
                },
                {
                    q: 'Photorespiration occurs in C₃ plants because RuBisCO also fixes:',
                    o: [
                        'N₂',
                        'O₂',
                        'H₂O',
                        'CO'
                    ],
                    a: 1,
                    s: 'RuBisCO has both carboxylase and oxygenase activity. In C₃ plants at high O₂/low CO₂, it fixes O₂ (oxygenase), producing phosphoglycolate → glycolate pathway → CO₂ loss. This wasteful process is photorespiration.'
                },
                {
                    q: 'Emerson effect demonstrates the enhancement of photosynthesis by:',
                    o: [
                        'High light intensity',
                        'Using both far-red and red light together',
                        'Increasing CO₂',
                        'High temperature'
                    ],
                    a: 1,
                    s: 'Emerson effect: using far-red (>680 nm, PS I) and shorter red light (~680 nm, PS II) together gives a photosynthesis rate greater than the sum of individual rates. This proved two photosystems work together.'
                }
            ],
            hard: [
                {
                    q: 'In the Z-scheme of non-cyclic electron flow, the sequence is:',
                    o: [
                        'PS II → PQ → Cyt b6f → PC → PS I → Fd → NADP⁺',
                        'PS I → PS II → PQ → Cyt → NADP⁺',
                        'PS II → PS I → PQ → Fd → NADP⁺',
                        'Water → PS I → PS II → NADP⁺'
                    ],
                    a: 0,
                    s: 'Z-scheme: H₂O → PS II (P680) → Pheophytin → PQ → Cyt b6f → Plastocyanin (PC) → PS I (P700) → Ferredoxin (Fd) → NADP⁺ reductase → NADPH. Water is split at PS II releasing O₂.'
                },
                {
                    q: 'The quantum yield of photosynthesis is approximately:',
                    o: [
                        '1/8 or 0.125',
                        '1/4 or 0.25',
                        '1/2 or 0.5',
                        '1/10 or 0.1'
                    ],
                    a: 0,
                    s: 'Quantum yield = molecules O₂ evolved per photon absorbed ≈ 1/8. Minimum 8 photons are needed to evolve 1 O₂ molecule (4 from PS II + 4 from PS I for 4 electrons from 2H₂O).'
                },
                {
                    q: 'Bundle sheath cells in C₄ plants lack:',
                    o: [
                        'Chloroplasts',
                        'PS II (functional grana)',
                        'Mitochondria',
                        'Ribosomes'
                    ],
                    a: 1,
                    s: 'Bundle sheath chloroplasts in C₄ plants have reduced/absent grana (and thus lack functional PS II). They have only stromal lamellae with PS I. This ensures O₂ is not produced near RuBisCO, preventing photorespiration.'
                },
                {
                    q: 'The enzyme that regenerates PEP from pyruvate in C₄ mesophyll cells is:',
                    o: [
                        'PEP carboxylase',
                        'Pyruvate orthophosphate dikinase',
                        'RuBisCO',
                        'Malate dehydrogenase'
                    ],
                    a: 1,
                    s: 'Pyruvate orthophosphate dikinase converts pyruvate back to PEP in mesophyll cells using 2 ATP equivalents. This enzyme is unique to C₄ and CAM plants and is a major energy cost of C₄ photosynthesis.'
                },
                {
                    q: 'CAM photosynthesis differs from C₄ in that spatial separation is replaced by:',
                    o: [
                        'Chemical separation',
                        'Temporal separation (day/night)',
                        'No separation',
                        'Nuclear separation'
                    ],
                    a: 1,
                    s: 'In CAM plants, CO₂ fixation (by PEP carboxylase → malate) occurs at night (stomata open), and decarboxylation + Calvin cycle occurs during the day (stomata closed). This is temporal separation vs spatial separation in C₄ plants.'
                }
            ]
        },
        {
            name: 'Plant Transport & Mineral Nutrition',
            slug: 'transport-nutrition',
            easy: [
                {
                    q: 'Water absorption by roots occurs mainly by:',
                    o: [
                        'Active transport',
                        'Osmosis',
                        'Diffusion of solutes',
                        'Pinocytosis'
                    ],
                    a: 1,
                    s: 'Water absorption by roots occurs mainly by osmosis — movement of water from a region of higher water potential (soil) to lower water potential (root cells) through selectively permeable membranes.'
                },
                {
                    q: 'Transpiration is the loss of water primarily through:',
                    o: [
                        'Roots',
                        'Stomata',
                        'Cuticle only',
                        'Lenticels only'
                    ],
                    a: 1,
                    s: 'About 90-95% of transpiration occurs through stomata (stomatal transpiration). Small amounts occur through the cuticle (cuticular) and lenticels (lenticular transpiration).'
                },
                {
                    q: 'Which element is a macronutrient for plants?',
                    o: [
                        'Iron',
                        'Nitrogen',
                        'Zinc',
                        'Copper'
                    ],
                    a: 1,
                    s: 'Nitrogen is a macronutrient required in large quantities (>10 mmol/kg). Other macronutrients: C, H, O, P, S, K, Ca, Mg. Iron, Zinc, Copper are micronutrients (needed in trace amounts).'
                },
                {
                    q: 'The cohesion-tension theory explains:',
                    o: [
                        'Phloem transport',
                        'Ascent of sap in xylem',
                        'Mineral absorption',
                        'Root pressure'
                    ],
                    a: 1,
                    s: 'Cohesion-tension theory (Dixon and Joly) explains the ascent of sap: transpiration creates tension (negative pressure), pulling water up due to cohesive forces between water molecules in continuous water column.'
                },
                {
                    q: 'Nitrogen fixation is the conversion of:',
                    o: [
                        'NH₃ to NO₃⁻',
                        'N₂ to NH₃/NH₄⁺',
                        'NO₃⁻ to N₂',
                        'NH₄⁺ to NO₂⁻'
                    ],
                    a: 1,
                    s: 'Nitrogen fixation converts atmospheric N₂ gas to ammonia (NH₃/NH₄⁺). Done by nitrogenase enzyme in nitrogen-fixing bacteria like Rhizobium (symbiotic) and Azotobacter (free-living).'
                }
            ],
            medium: [
                {
                    q: 'Guttation occurs through:',
                    o: [
                        'Stomata',
                        'Hydathodes',
                        'Lenticels',
                        'Cuticle'
                    ],
                    a: 1,
                    s: 'Guttation is the exudation of liquid water from hydathodes (special pores) at leaf tips and margins, driven by root pressure. It occurs at night when transpiration is low and humidity is high.'
                },
                {
                    q: 'The pressure flow hypothesis explains transport in:',
                    o: [
                        'Xylem',
                        'Phloem',
                        'Both xylem and phloem',
                        'Neither'
                    ],
                    a: 1,
                    s: 'Münch\'s pressure flow (mass flow) hypothesis explains phloem transport: sucrose loading at source creates high turgor pressure, and unloading at sink creates low pressure, driving sieve tube flow from source to sink.'
                },
                {
                    q: 'Which micronutrient is essential for nitrogen fixation?',
                    o: [
                        'Zinc',
                        'Molybdenum',
                        'Copper',
                        'Boron'
                    ],
                    a: 1,
                    s: 'Molybdenum (Mo) is a component of nitrogenase enzyme complex, which catalyzes N₂ fixation. It is also part of nitrate reductase. Deficiency impairs nitrogen metabolism.'
                },
                {
                    q: 'The symbiotic nitrogen-fixing bacterium in legume root nodules is:',
                    o: [
                        'Azotobacter',
                        'Rhizobium',
                        'Azospirillum',
                        'Clostridium'
                    ],
                    a: 1,
                    s: 'Rhizobium is a symbiotic N₂-fixing bacterium that forms root nodules in leguminous plants. It converts N₂ to NH₃ using nitrogenase; the plant provides carbohydrates and anaerobic conditions (leghemoglobin).'
                },
                {
                    q: 'Plasmolysis occurs when a plant cell is placed in:',
                    o: [
                        'Hypotonic solution',
                        'Hypertonic solution',
                        'Isotonic solution',
                        'Distilled water'
                    ],
                    a: 1,
                    s: 'In a hypertonic solution, water moves out of the cell by exosmosis. The protoplast shrinks and pulls away from the cell wall — this is plasmolysis. It is reversible (deplasmolysis in hypotonic solution).'
                },
                {
                    q: 'Active transport of ions requires:',
                    o: [
                        'Only concentration gradient',
                        'ATP energy and carrier proteins',
                        'Osmotic pressure',
                        'No energy'
                    ],
                    a: 1,
                    s: 'Active transport moves ions/molecules against their concentration gradient, requiring metabolic energy (ATP) and specific carrier (transporter) proteins. Example: uptake of mineral ions by root hair cells.'
                }
            ],
            hard: [
                {
                    q: 'Leghemoglobin in root nodules functions as:',
                    o: [
                        'N₂ carrier',
                        'O₂ scavenger to maintain anaerobic conditions',
                        'Electron donor',
                        'CO₂ carrier'
                    ],
                    a: 1,
                    s: 'Leghemoglobin (a pink/red protein) binds free O₂ in root nodules, maintaining the low O₂ (microaerobic) environment needed by the O₂-sensitive nitrogenase enzyme for N₂ fixation.'
                },
                {
                    q: 'The water potential of pure water at standard temperature and pressure is:',
                    o: [
                        '−1 bar',
                        '+1 bar',
                        'Zero (0 bar/MPa)',
                        'Infinity'
                    ],
                    a: 2,
                    s: 'Water potential (Ψ) of pure water at STP = 0 (by convention). Addition of solutes decreases Ψ (makes it negative). Water moves from higher to lower water potential.'
                },
                {
                    q: 'Cation exchange capacity (CEC) of soil is important for:',
                    o: [
                        'Water retention',
                        'Mineral nutrient availability to roots',
                        'Soil aeration',
                        'Microbial growth only'
                    ],
                    a: 1,
                    s: 'CEC is the ability of soil particles (clay, humus) to hold cation nutrients (K⁺, Ca²⁺, Mg²⁺, NH₄⁺) on their negatively charged surfaces. High CEC means better nutrient retention and availability for root absorption.'
                },
                {
                    q: 'Aquaporins are:',
                    o: [
                        'Enzymes that split water',
                        'Channel proteins for facilitated water transport',
                        'Pumps that actively transport water',
                        'Proteins that fix nitrogen'
                    ],
                    a: 1,
                    s: 'Aquaporins are integral membrane proteins that form water-selective channels, greatly facilitating osmotic water movement across cell membranes. They increase membrane permeability to water without allowing ion passage.'
                },
                {
                    q: 'Mycorrhiza helps plants in absorption of:',
                    o: [
                        'Water only',
                        'Phosphorus primarily',
                        'Nitrogen only',
                        'Carbon dioxide'
                    ],
                    a: 1,
                    s: 'Mycorrhizal fungi form symbiotic associations with plant roots and greatly enhance phosphorus (P) absorption because their hyphae extend far beyond the root depletion zone. They also help with water and micronutrient uptake.'
                }
            ]
        }
    ]
};
/* ──── Chapter 4: Genetics & Evolution ──── */ const geneticsEvolution = {
    name: 'Genetics & Evolution',
    slug: 'genetics-evolution',
    topics: [
        {
            name: 'Mendelian Genetics & Molecular Biology',
            slug: 'mendelian-molecular',
            easy: [
                {
                    q: 'The law of segregation is also known as:',
                    o: [
                        'Law of independent assortment',
                        'Law of purity of gametes',
                        'Law of dominance',
                        'Law of inheritance'
                    ],
                    a: 1,
                    s: 'Mendel\'s first law (Law of Segregation) = Law of Purity of Gametes: the two alleles of a gene segregate during gamete formation, so each gamete receives only one allele.'
                },
                {
                    q: 'A test cross involves crossing with:',
                    o: [
                        'A hybrid individual',
                        'A homozygous dominant',
                        'A homozygous recessive',
                        'Another F₁ individual'
                    ],
                    a: 2,
                    s: 'A test cross crosses the individual of unknown genotype with a homozygous recessive (aa). If all offspring are dominant phenotype → parent is AA. If 1:1 ratio → parent is Aa.'
                },
                {
                    q: 'DNA replication is:',
                    o: [
                        'Conservative',
                        'Semi-conservative',
                        'Dispersive',
                        'Non-conservative'
                    ],
                    a: 1,
                    s: 'DNA replication is semi-conservative (Meselson and Stahl, 1958): each daughter DNA has one original (parental) strand and one newly synthesized strand.'
                },
                {
                    q: 'The central dogma of molecular biology is:',
                    o: [
                        'DNA → RNA → Protein',
                        'RNA → DNA → Protein',
                        'Protein → RNA → DNA',
                        'DNA → Protein → RNA'
                    ],
                    a: 0,
                    s: 'Central dogma: DNA → (transcription) → RNA → (translation) → Protein. Information flows from nucleic acids to proteins. Reverse transcription (RNA → DNA) occurs in retroviruses.'
                },
                {
                    q: 'In a monohybrid cross Aa × Aa, the phenotypic ratio is:',
                    o: [
                        '1:2:1',
                        '3:1',
                        '9:3:3:1',
                        '1:1'
                    ],
                    a: 1,
                    s: 'Aa × Aa gives genotypes: 1AA : 2Aa : 1aa. Since A is dominant, phenotypic ratio is 3 dominant : 1 recessive = 3:1.'
                }
            ],
            medium: [
                {
                    q: 'Incomplete dominance results in a phenotypic ratio of:',
                    o: [
                        '3:1',
                        '1:2:1',
                        '9:3:3:1',
                        '1:1'
                    ],
                    a: 1,
                    s: 'In incomplete dominance, heterozygotes show an intermediate phenotype. F₂ ratio is 1:2:1 (both phenotypic and genotypic). Example: red × white snapdragons give pink F₁.'
                },
                {
                    q: 'Transcription in eukaryotes is carried out by:',
                    o: [
                        'DNA polymerase',
                        'RNA polymerase',
                        'Reverse transcriptase',
                        'Ligase'
                    ],
                    a: 1,
                    s: 'RNA polymerase synthesizes mRNA from a DNA template during transcription. Eukaryotes have RNA Pol I (rRNA), II (mRNA), and III (tRNA, 5S rRNA). Prokaryotes have a single RNA polymerase.'
                },
                {
                    q: 'A codon consists of:',
                    o: [
                        '2 nucleotides',
                        '3 nucleotides (triplet)',
                        '4 nucleotides',
                        '1 nucleotide'
                    ],
                    a: 1,
                    s: 'A codon is a sequence of 3 consecutive nucleotides (triplet) on mRNA that codes for a specific amino acid. There are 64 codons: 61 sense codons + 3 stop codons (UAA, UAG, UGA).'
                },
                {
                    q: 'Sex-linked recessive traits like colour blindness and haemophilia are more common in:',
                    o: [
                        'Females',
                        'Males',
                        'Both equally',
                        'Neither sex specifically'
                    ],
                    a: 1,
                    s: 'Males are more affected by X-linked recessive traits because they have only one X chromosome (XY). A single recessive allele on X is expressed. Females (XX) need two copies to be affected (carrier with one).'
                },
                {
                    q: 'Post-transcriptional modifications of mRNA in eukaryotes include:',
                    o: [
                        '5\' capping, 3\' polyadenylation, splicing',
                        'Methylation of all bases',
                        'Addition of introns',
                        'Removal of exons'
                    ],
                    a: 0,
                    s: 'Pre-mRNA undergoes: 5\' capping (7-methylguanosine), 3\' polyadenylation (poly-A tail for stability), and splicing (removal of introns, joining of exons by spliceosome).'
                },
                {
                    q: 'The wobble hypothesis explains why:',
                    o: [
                        'All codons are essential',
                        'One tRNA can recognize more than one codon',
                        'mRNA is unstable',
                        'Ribosomes can read backwards'
                    ],
                    a: 1,
                    s: 'Wobble hypothesis (Crick): the 3rd base of a codon can form non-standard base pairs with the 1st base (anticodon) of tRNA, allowing one tRNA to recognize multiple synonymous codons (degeneracy).'
                }
            ],
            hard: [
                {
                    q: 'In epistasis, a 9:3:3:1 ratio is modified to 9:3:4 in:',
                    o: [
                        'Complementary interaction',
                        'Recessive epistasis',
                        'Dominant epistasis',
                        'Duplicate recessive'
                    ],
                    a: 1,
                    s: 'In recessive epistasis (e.g., coat colour in Labrador dogs): aa genotype masks expression of B locus. Ratio: 9 A_B_ : 3 A_bb : 4 (3 aaB_ + 1 aabb) = 9:3:4.'
                },
                {
                    q: 'Okazaki fragments are formed during synthesis of:',
                    o: [
                        'Leading strand',
                        'Lagging strand',
                        'Both strands',
                        'mRNA'
                    ],
                    a: 1,
                    s: 'Okazaki fragments are short DNA segments (100-200 bp in eukaryotes) synthesized on the lagging strand in the 5\'→3\' direction (opposite to fork movement). DNA ligase joins them. Leading strand is synthesized continuously.'
                },
                {
                    q: 'The operon model was proposed by:',
                    o: [
                        'Watson and Crick',
                        'Jacob and Monod',
                        'Beadle and Tatum',
                        'Hershey and Chase'
                    ],
                    a: 1,
                    s: 'Jacob and Monod (1961) proposed the operon concept using the lac operon in E. coli. An operon has a promoter, operator, structural genes, and is regulated by a repressor protein.'
                },
                {
                    q: 'Hardy-Weinberg equilibrium requires all of the following EXCEPT:',
                    o: [
                        'Large population',
                        'Random mating',
                        'Natural selection',
                        'No mutation'
                    ],
                    a: 2,
                    s: 'Hardy-Weinberg equilibrium (p² + 2pq + q² = 1) requires: large population, random mating, no mutation, no migration, and NO natural selection. Any of these disruptions causes evolution.'
                },
                {
                    q: 'The template strand is also called the:',
                    o: [
                        'Coding strand',
                        'Sense strand',
                        'Antisense strand',
                        'Non-template strand'
                    ],
                    a: 2,
                    s: 'Template strand = antisense strand (3\'→5\' direction). RNA polymerase reads it to synthesize mRNA. Coding strand = sense strand = non-template strand (has same sequence as mRNA, with T instead of U).'
                }
            ]
        },
        {
            name: 'Evolution & Adaptation',
            slug: 'evolution-adaptation',
            easy: [
                {
                    q: 'Who proposed the theory of natural selection?',
                    o: [
                        'Lamarck',
                        'Charles Darwin',
                        'Hugo de Vries',
                        'Mendel'
                    ],
                    a: 1,
                    s: 'Charles Darwin proposed the theory of evolution by natural selection in "On the Origin of Species" (1859). Organisms with favorable variations survive and reproduce more (survival of the fittest).'
                },
                {
                    q: 'Homologous organs indicate:',
                    o: [
                        'Convergent evolution',
                        'Divergent evolution',
                        'Parallel evolution',
                        'No evolution'
                    ],
                    a: 1,
                    s: 'Homologous organs (same origin, different function) indicate divergent evolution from a common ancestor. Example: forelimbs of human, whale, bat, horse — all have same basic bone pattern.'
                },
                {
                    q: 'Analogous organs have:',
                    o: [
                        'Same origin, same function',
                        'Different origin, similar function',
                        'Same origin, different function',
                        'No functional similarity'
                    ],
                    a: 1,
                    s: 'Analogous organs have different embryonic origin but similar function (convergent evolution). Example: wings of birds and insects — different structures adapted for flight independently.'
                },
                {
                    q: 'The first life on Earth originated in:',
                    o: [
                        'Land',
                        'Water (oceans)',
                        'Air',
                        'Ice'
                    ],
                    a: 1,
                    s: 'Life originated in primordial oceans/water about 3.5 billion years ago. The reducing atmosphere and energy sources (lightning, UV) formed simple organic molecules (Oparin-Haldane hypothesis).'
                },
                {
                    q: 'Vestigial organs are:',
                    o: [
                        'Fully functional organs',
                        'Organs with reduced function, remnants of ancestors',
                        'Newly evolved organs',
                        'Organs found only in plants'
                    ],
                    a: 1,
                    s: 'Vestigial organs are degenerate/rudimentary organs that were functional in ancestors but have reduced or no function now. Examples: human appendix, wisdom teeth, nictitating membrane.'
                }
            ],
            medium: [
                {
                    q: 'Genetic drift has a greater effect in:',
                    o: [
                        'Large populations',
                        'Small populations',
                        'All populations equally',
                        'Only in plants'
                    ],
                    a: 1,
                    s: 'Genetic drift (random changes in allele frequency) has a greater effect in small populations (founder effect, bottleneck effect) because sampling errors are more significant. Large populations are buffered against drift.'
                },
                {
                    q: 'Reproductive isolation is essential for:',
                    o: [
                        'Variation within a species',
                        'Speciation (formation of new species)',
                        'Adaptation only',
                        'Migration'
                    ],
                    a: 1,
                    s: 'Reproductive isolation (pre-zygotic and post-zygotic barriers) prevents gene flow between populations, allowing them to diverge genetically and eventually become separate species (speciation).'
                },
                {
                    q: 'Industrial melanism in peppered moths is an example of:',
                    o: [
                        'Genetic drift',
                        'Directional natural selection',
                        'Stabilizing selection',
                        'Disruptive selection'
                    ],
                    a: 1,
                    s: 'Industrial melanism: dark (melanic) peppered moths increased in polluted areas of Britain due to directional selection — dark moths were better camouflaged on soot-covered trees, avoiding bird predation.'
                },
                {
                    q: 'Adaptive radiation refers to:',
                    o: [
                        'Radiation-induced mutations',
                        'Evolution of different species from a common ancestor into different ecological niches',
                        'Convergent evolution',
                        'Extinction of species'
                    ],
                    a: 1,
                    s: 'Adaptive radiation: a single ancestral species diversifies into many species adapted to different ecological niches. Classic example: Darwin\'s finches on Galápagos — different beak shapes for different food sources.'
                },
                {
                    q: 'Founder effect is a type of:',
                    o: [
                        'Natural selection',
                        'Mutation',
                        'Genetic drift',
                        'Gene flow'
                    ],
                    a: 2,
                    s: 'Founder effect is a type of genetic drift: when a small group from a larger population colonizes a new area. The small sample may not represent the original population\'s allele frequencies, leading to different evolution.'
                },
                {
                    q: 'Which of the following provides the most concrete evidence for evolution?',
                    o: [
                        'Embryology',
                        'Fossil record',
                        'Biogeography',
                        'Molecular phylogeny'
                    ],
                    a: 1,
                    s: 'The fossil record provides direct, historical evidence of past life forms and their transitions. It shows a chronological sequence of organisms from simple to complex and documents transitional forms.'
                }
            ],
            hard: [
                {
                    q: 'Punctuated equilibrium theory proposes that:',
                    o: [
                        'Evolution occurs at a constant rate',
                        'Long periods of stasis are punctuated by rapid speciation events',
                        'Only gradualism occurs',
                        'Evolution stopped long ago'
                    ],
                    a: 1,
                    s: 'Punctuated equilibrium (Gould & Eldredge): species remain stable (stasis) for long periods, then undergo rapid evolutionary change during speciation. Contrasts with phyletic gradualism (slow, constant change).'
                },
                {
                    q: 'Sympatric speciation occurs when:',
                    o: [
                        'Populations are geographically isolated',
                        'New species evolve within the same geographical area',
                        'Only allopatric mechanisms work',
                        'There is no reproductive isolation'
                    ],
                    a: 1,
                    s: 'Sympatric speciation occurs without geographic isolation — through polyploidy (especially in plants), habitat differentiation, or temporal isolation within the same area. Common in plants via allopolyploidy.'
                },
                {
                    q: 'Which of the following is an example of pre-zygotic reproductive isolation?',
                    o: [
                        'Hybrid sterility',
                        'Hybrid inviability',
                        'Temporal isolation (different breeding seasons)',
                        'Hybrid breakdown'
                    ],
                    a: 2,
                    s: 'Pre-zygotic barriers prevent mating or fertilization: temporal (different timing), habitat (different niches), behavioral (different courtship), mechanical (incompatible structures), gametic isolation. Post-zygotic barriers act after fertilization.'
                },
                {
                    q: 'The concept of "survival of the fittest" was coined by:',
                    o: [
                        'Charles Darwin',
                        'Alfred Wallace',
                        'Herbert Spencer',
                        'Thomas Huxley'
                    ],
                    a: 2,
                    s: 'Herbert Spencer coined "survival of the fittest" after reading Darwin\'s work. Darwin later adopted the phrase in later editions of Origin of Species. It means organisms best adapted to their environment survive and reproduce.'
                },
                {
                    q: 'Molecular clock hypothesis is based on:',
                    o: [
                        'Rate of morphological change',
                        'Constant rate of neutral mutations in DNA/protein sequences',
                        'Fossil dating',
                        'Rate of speciation'
                    ],
                    a: 1,
                    s: 'Molecular clock: neutral DNA/protein mutations accumulate at a roughly constant rate over time. By counting sequence differences between species, divergence time can be estimated (calibrated with fossil dates).'
                }
            ]
        }
    ]
};
const botanyChapters = [
    plantDiversity,
    cellBiology,
    plantPhysiology,
    geneticsEvolution
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/neet-practice/biology-zoology.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoologyChapters",
    ()=>zoologyChapters
]);
/* ═══════════════════════════════════════════════════
   NEET BIOLOGY — ZOOLOGY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */ /* ──── Chapter 1: Animal Diversity & Structural Organisation ──── */ const animalDiversity = {
    name: 'Animal Diversity & Structural Organisation',
    slug: 'animal-diversity',
    topics: [
        {
            name: 'Animal Kingdom Classification',
            slug: 'animal-classification',
            easy: [
                {
                    q: 'Which phylum includes organisms with a water vascular system?',
                    o: [
                        'Arthropoda',
                        'Mollusca',
                        'Echinodermata',
                        'Annelida'
                    ],
                    a: 2,
                    s: 'Echinodermata (starfish, sea urchins) have a unique water vascular system (ambulacral system) used for locomotion, respiration, and food capture.'
                },
                {
                    q: 'Insects belong to which phylum?',
                    o: [
                        'Annelida',
                        'Mollusca',
                        'Arthropoda',
                        'Chordata'
                    ],
                    a: 2,
                    s: 'Insects are the largest class of phylum Arthropoda. Key features: chitinous exoskeleton, jointed appendages, segmented body (head, thorax, abdomen), 3 pairs of legs, and usually wings.'
                },
                {
                    q: 'Nematocysts are characteristic of which phylum?',
                    o: [
                        'Porifera',
                        'Cnidaria (Coelenterata)',
                        'Platyhelminthes',
                        'Annelida'
                    ],
                    a: 1,
                    s: 'Nematocysts (cnidocysts) are stinging cells unique to Cnidaria (Hydra, jellyfish, corals). They contain a coiled thread that can be discharged to inject toxins for defense and prey capture.'
                },
                {
                    q: 'Which of the following is a characteristic of chordates?',
                    o: [
                        'Exoskeleton',
                        'Notochord at some stage of life',
                        'Radial symmetry',
                        'Open circulatory system'
                    ],
                    a: 1,
                    s: 'All chordates possess a notochord (at least during embryonic development), dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail. In vertebrates, the notochord is replaced by the vertebral column.'
                },
                {
                    q: 'Sponges (Porifera) lack:',
                    o: [
                        'Cells',
                        'Pores',
                        'True tissues',
                        'Canal system'
                    ],
                    a: 2,
                    s: 'Porifera lack true tissues and organs (they are at the cellular level of organization). They have specialized cells (choanocytes, amoebocytes) but no organized tissue layers.'
                }
            ],
            medium: [
                {
                    q: 'The coelom of arthropods is called:',
                    o: [
                        'True coelom',
                        'Pseudocoelom',
                        'Haemocoel',
                        'Enterocoelom'
                    ],
                    a: 2,
                    s: 'Arthropods have a haemocoel — the body cavity is filled with haemolymph (blood). The true coelom is reduced and modified. Haemocoel is part of their open circulatory system.'
                },
                {
                    q: 'Bilateral symmetry is first seen in which phylum?',
                    o: [
                        'Cnidaria',
                        'Platyhelminthes',
                        'Porifera',
                        'Echinodermata'
                    ],
                    a: 1,
                    s: 'Bilateral symmetry first appears in Platyhelminthes (flatworms). Porifera are asymmetric, Cnidaria show radial symmetry. Echinoderms show radial symmetry as adults but bilateral as larvae.'
                },
                {
                    q: 'Metamorphosis of a butterfly involves:',
                    o: [
                        'Incomplete metamorphosis',
                        'Complete metamorphosis (egg → larva → pupa → adult)',
                        'No metamorphosis',
                        'Direct development'
                    ],
                    a: 1,
                    s: 'Butterflies undergo holometabolous (complete) metamorphosis: egg → larva (caterpillar) → pupa (chrysalis) → adult (imago). Grasshoppers undergo hemimetabolous (incomplete) metamorphosis (no pupa stage).'
                },
                {
                    q: 'Which class of vertebrates are truly viviparous?',
                    o: [
                        'Reptilia',
                        'Aves',
                        'Mammalia',
                        'Amphibia'
                    ],
                    a: 2,
                    s: 'Most mammals are truly viviparous — they give birth to live young nourished through a placenta. Exceptions: monotremes (platypus) are oviparous. Some reptiles and fish show ovoviviparity.'
                },
                {
                    q: 'Tube feet are characteristic of:',
                    o: [
                        'Annelids',
                        'Arthropods',
                        'Echinoderms',
                        'Molluscs'
                    ],
                    a: 2,
                    s: 'Tube feet (podia) are part of the water vascular system unique to echinoderms. They function in locomotion, feeding, and gas exchange, powered by hydraulic pressure.'
                },
                {
                    q: 'The larval stage of a frog is called:',
                    o: [
                        'Nymph',
                        'Tadpole',
                        'Caterpillar',
                        'Planula'
                    ],
                    a: 1,
                    s: 'Frog larvae are tadpoles — aquatic, gill-breathing, with tails for swimming. During metamorphosis, they develop lungs, legs, and absorb the tail to become terrestrial adults (amphibians).'
                }
            ],
            hard: [
                {
                    q: 'Deuterostomes differ from protostomes in that:',
                    o: [
                        'Blastopore becomes the mouth',
                        'Blastopore becomes the anus',
                        'They lack a coelom',
                        'Cleavage is always spiral'
                    ],
                    a: 1,
                    s: 'In deuterostomes (echinoderms, chordates), the blastopore becomes the anus and mouth forms secondarily. In protostomes (annelids, arthropods, molluscs), blastopore becomes the mouth.'
                },
                {
                    q: 'Which of the following organisms shows bioluminescence?',
                    o: [
                        'Earthworm',
                        'Ctenophore',
                        'Leech',
                        'Tapeworm'
                    ],
                    a: 1,
                    s: 'Ctenophores (comb jellies) show bioluminescence — they produce light through luciferin-luciferase biochemical reaction. They are often confused with cnidarians but lack nematocysts.'
                },
                {
                    q: 'Enterocoelomates are animals whose coelom forms from:',
                    o: [
                        'Splitting of mesoderm (schizocoely)',
                        'Outpocketing of archenteron (enterocoely)',
                        'Ectoderm invagination',
                        'Blastocoel persistence'
                    ],
                    a: 1,
                    s: 'In enterocoelomates (deuterostomes: echinoderms, chordates), the coelom forms by outpocketing of the gut (archenteron) — enterocoely. Protostomes form coelom by schizocoely (splitting of mesodermal mass).'
                },
                {
                    q: 'Torsion is a developmental process unique to:',
                    o: [
                        'Bivalves',
                        'Gastropods',
                        'Cephalopods',
                        'Echinoderms'
                    ],
                    a: 1,
                    s: 'Torsion is a 180° twisting of the visceral mass and mantle relative to the head-foot in gastropod larvae. It brings the mantle cavity, gills, and anus forward above the head.'
                },
                {
                    q: 'The flame cells are excretory structures found in:',
                    o: [
                        'Annelids',
                        'Platyhelminthes',
                        'Arthropods',
                        'Nematodes'
                    ],
                    a: 1,
                    s: 'Flame cells (protonephridia) are the excretory organs of Platyhelminthes (flatworms). They have a tuft of beating cilia (resembling a flame) that wafts fluid through tubules for osmoregulation.'
                }
            ]
        },
        {
            name: 'Human Anatomy Basics',
            slug: 'human-anatomy',
            easy: [
                {
                    q: 'The largest organ of the human body is:',
                    o: [
                        'Liver',
                        'Skin',
                        'Brain',
                        'Lungs'
                    ],
                    a: 1,
                    s: 'Skin is the largest organ, covering about 1.5-2 m² in adults. It weighs about 3.6 kg. The liver is the largest internal organ. Skin has three layers: epidermis, dermis, and hypodermis.'
                },
                {
                    q: 'Red blood cells (RBCs) are produced in:',
                    o: [
                        'Liver',
                        'Spleen',
                        'Red bone marrow',
                        'Lymph nodes'
                    ],
                    a: 2,
                    s: 'In adults, RBCs are produced in red bone marrow (hematopoiesis). In the fetus, the liver and spleen also produce blood cells. RBCs live about 120 days before being broken down in the spleen.'
                },
                {
                    q: 'The basic structural unit of the nervous system is:',
                    o: [
                        'Nephron',
                        'Neuron',
                        'Myocyte',
                        'Hepatocyte'
                    ],
                    a: 1,
                    s: 'Neuron is the structural and functional unit of the nervous system. It consists of a cell body (soma), dendrites (receive signals), and an axon (transmits signals). Neurons are excitable cells.'
                },
                {
                    q: 'How many pairs of ribs are there in humans?',
                    o: [
                        '10',
                        '12',
                        '14',
                        '24'
                    ],
                    a: 1,
                    s: '12 pairs of ribs (24 total): 7 true ribs (attached to sternum directly), 3 false ribs (attached indirectly), and 2 floating ribs (not attached to sternum).'
                },
                {
                    q: 'The functional unit of the kidney is:',
                    o: [
                        'Neuron',
                        'Nephron',
                        'Alveolus',
                        'Villus'
                    ],
                    a: 1,
                    s: 'Nephron is the structural and functional unit of the kidney. Each kidney has about 1 million nephrons. Each nephron has a glomerulus, Bowman\'s capsule, tubular system (PCT, loop of Henle, DCT).'
                }
            ],
            medium: [
                {
                    q: 'Tendons connect:',
                    o: [
                        'Bone to bone',
                        'Muscle to bone',
                        'Muscle to muscle',
                        'Bone to cartilage'
                    ],
                    a: 1,
                    s: 'Tendons are dense regular connective tissue connecting skeletal muscle to bone. They are made of parallel collagen fibres (white, inelastic). Ligaments connect bone to bone (slightly elastic).'
                },
                {
                    q: 'The sinoatrial (SA) node is located in:',
                    o: [
                        'Left atrium',
                        'Right atrium',
                        'Left ventricle',
                        'Right ventricle'
                    ],
                    a: 1,
                    s: 'The SA node (pacemaker) is located in the wall of the right atrium near the opening of the superior vena cava. It generates electrical impulses that initiate each heartbeat (~72 bpm).'
                },
                {
                    q: 'Haversian system is the structural unit of:',
                    o: [
                        'Cartilage',
                        'Compact bone (osteon)',
                        'Skeletal muscle',
                        'Blood'
                    ],
                    a: 1,
                    s: 'Haversian system (osteon) is the basic structural unit of compact bone. It consists of concentric lamellae around a central Haversian canal containing blood vessels and nerves, with osteocytes in lacunae.'
                },
                {
                    q: 'The part of the brain that controls balance and coordination is:',
                    o: [
                        'Cerebrum',
                        'Cerebellum',
                        'Medulla oblongata',
                        'Hypothalamus'
                    ],
                    a: 1,
                    s: 'Cerebellum controls balance, coordination, posture, and fine motor movements. It receives input from muscles, joints, and vestibular system. Damage causes ataxia (lack of coordination).'
                },
                {
                    q: 'Type I alveolar cells function in:',
                    o: [
                        'Surfactant production',
                        'Gas exchange',
                        'Phagocytosis',
                        'Mucus secretion'
                    ],
                    a: 1,
                    s: 'Type I alveolar cells (pneumocytes) are thin, flat cells forming the alveolar wall for gas exchange. Type II cells produce surfactant (reduces surface tension). Alveolar macrophages phagocytose pathogens.'
                },
                {
                    q: 'Peristalsis moves food through the:',
                    o: [
                        'Respiratory tract only',
                        'Alimentary canal',
                        'Urinary tract only',
                        'Blood vessels'
                    ],
                    a: 1,
                    s: 'Peristalsis is wave-like contractions of smooth muscle in the alimentary canal (esophagus, stomach, intestines) that push food forward. It is controlled by the enteric nervous system (involuntary).'
                }
            ],
            hard: [
                {
                    q: 'The juxtaglomerular apparatus (JGA) is formed by:',
                    o: [
                        'PCT and efferent arteriole',
                        'DCT and afferent arteriole',
                        'Loop of Henle and collecting duct',
                        'Bowman\'s capsule and PCT'
                    ],
                    a: 1,
                    s: 'JGA is at the junction of DCT and the afferent arteriole of the same nephron. It contains juxtaglomerular cells (secrete renin), macula densa (sense NaCl), and lacis cells. It regulates GFR and blood pressure.'
                },
                {
                    q: 'The countercurrent mechanism in the kidney is found in:',
                    o: [
                        'Glomerulus',
                        'Bowman\'s capsule',
                        'Loop of Henle and vasa recta',
                        'PCT only'
                    ],
                    a: 2,
                    s: 'Countercurrent mechanism operates in the loop of Henle and vasa recta, creating a concentration gradient in the medulla. Descending limb is permeable to water; ascending limb actively pumps out NaCl.'
                },
                {
                    q: 'Saltatory conduction occurs in:',
                    o: [
                        'All neurons',
                        'Only myelinated neurons',
                        'Only unmyelinated neurons',
                        'Muscle fibres'
                    ],
                    a: 1,
                    s: 'Saltatory conduction ("jumping") occurs only in myelinated neurons. Action potentials jump from one node of Ranvier to the next, bypassing myelinated segments. This greatly increases speed (up to 120 m/s vs 1 m/s).'
                },
                {
                    q: 'Which of the following is NOT a function of the liver?',
                    o: [
                        'Bile production',
                        'Gluconeogenesis',
                        'RBC production in adults',
                        'Detoxification'
                    ],
                    a: 2,
                    s: 'In adults, the liver does NOT produce RBCs (that role belongs to red bone marrow). The fetal liver produces RBCs. The adult liver produces bile, stores glycogen, synthesizes proteins, and detoxifies chemicals.'
                },
                {
                    q: 'The cardiac output is defined as:',
                    o: [
                        'Heart rate × blood pressure',
                        'Stroke volume × heart rate',
                        'Blood pressure × blood volume',
                        'Stroke volume / heart rate'
                    ],
                    a: 1,
                    s: 'Cardiac output (CO) = Stroke volume (SV) × Heart rate (HR). Normal CO ≈ 70 mL × 72 bpm ≈ 5 L/min. It represents the total volume of blood pumped by a ventricle per minute.'
                }
            ]
        }
    ]
};
/* ──── Chapter 2: Human Physiology ──── */ const humanPhysiology = {
    name: 'Human Physiology',
    slug: 'human-physiology',
    topics: [
        {
            name: 'Digestion, Breathing & Circulation',
            slug: 'digestion-breathing-circulation',
            easy: [
                {
                    q: 'Hydrochloric acid in the stomach is secreted by:',
                    o: [
                        'Chief cells',
                        'Parietal (oxyntic) cells',
                        'Goblet cells',
                        'G cells'
                    ],
                    a: 1,
                    s: 'Parietal (oxyntic) cells of gastric glands secrete HCl (pH ~1.5-2) and intrinsic factor (for vitamin B₁₂ absorption). Chief cells secrete pepsinogen. G cells secrete gastrin hormone.'
                },
                {
                    q: 'The exchange of gases in the lungs occurs in:',
                    o: [
                        'Bronchi',
                        'Bronchioles',
                        'Alveoli',
                        'Trachea'
                    ],
                    a: 2,
                    s: 'Gas exchange occurs across the thin alveolar wall and capillary wall (respiratory membrane). O₂ diffuses from alveoli to blood, CO₂ from blood to alveoli. About 300 million alveoli provide huge surface area.'
                },
                {
                    q: 'The normal blood pressure for a healthy adult is approximately:',
                    o: [
                        '120/80 mmHg',
                        '140/100 mmHg',
                        '100/60 mmHg',
                        '160/110 mmHg'
                    ],
                    a: 0,
                    s: '120/80 mmHg (systolic/diastolic). Systolic = pressure during ventricular contraction. Diastolic = pressure during relaxation. Hypertension: consistently >140/90 mmHg.'
                },
                {
                    q: 'Trypsin is secreted by:',
                    o: [
                        'Stomach',
                        'Liver',
                        'Pancreas (as trypsinogen)',
                        'Salivary glands'
                    ],
                    a: 2,
                    s: 'Trypsinogen (inactive) is secreted by the pancreas. It is activated to trypsin by enterokinase in the duodenum. Trypsin is a protease that digests proteins at pH 7-8.'
                },
                {
                    q: 'Hemoglobin is found in:',
                    o: [
                        'WBCs',
                        'Platelets',
                        'RBCs',
                        'Plasma'
                    ],
                    a: 2,
                    s: 'Hemoglobin is the oxygen-carrying pigment in RBCs. Each RBC contains about 280 million hemoglobin molecules. Each hemoglobin has 4 heme groups, each binding one O₂ molecule.'
                }
            ],
            medium: [
                {
                    q: 'The correct pathway of air in the respiratory system is:',
                    o: [
                        'Nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli',
                        'Nose → larynx → pharynx → trachea → alveoli → bronchi',
                        'Nose → trachea → pharynx → bronchi → alveoli',
                        'Nose → pharynx → trachea → larynx → bronchi → alveoli'
                    ],
                    a: 0,
                    s: 'Air pathway: Nose → pharynx → larynx (voice box) → trachea (windpipe) → bronchi → bronchioles → alveolar ducts → alveolar sacs → alveoli.'
                },
                {
                    q: 'The cardiac cycle consists of:',
                    o: [
                        'Atrial systole, ventricular systole, and joint diastole',
                        'Only systole',
                        'Only diastole',
                        'Two systoles only'
                    ],
                    a: 0,
                    s: 'Cardiac cycle (0.8 s): atrial systole (0.1 s) → ventricular systole (0.3 s) → joint diastole (0.4 s). During joint diastole, both atria and ventricles relax and heart fills with blood.'
                },
                {
                    q: 'Bile does NOT contain enzymes but helps in digestion by:',
                    o: [
                        'Killing bacteria',
                        'Emulsifying fats into smaller droplets',
                        'Digesting proteins',
                        'Absorbing water'
                    ],
                    a: 1,
                    s: 'Bile salts emulsify large fat globules into smaller micelles, increasing surface area for lipase action. Bile also neutralizes acidic chyme from the stomach and aids in fat-soluble vitamin absorption.'
                },
                {
                    q: 'Oxygen dissociation curve of hemoglobin is:',
                    o: [
                        'Linear',
                        'Sigmoidal (S-shaped)',
                        'Hyperbolic',
                        'Exponential'
                    ],
                    a: 1,
                    s: 'The oxygen-hemoglobin dissociation curve is sigmoidal due to cooperative binding: binding of one O₂ increases affinity for subsequent O₂ molecules (positive cooperativity).'
                },
                {
                    q: 'Which of the following produces surfactant in the lungs?',
                    o: [
                        'Type I pneumocytes',
                        'Type II pneumocytes',
                        'Alveolar macrophages',
                        'Clara cells'
                    ],
                    a: 1,
                    s: 'Type II pneumocytes (great alveolar cells) produce pulmonary surfactant — a phospholipid mixture (mainly DPPC) that reduces surface tension in alveoli, preventing collapse during expiration.'
                },
                {
                    q: 'The enzyme that initiates digestion of starch in the mouth is:',
                    o: [
                        'Pepsin',
                        'Trypsin',
                        'Salivary amylase (ptyalin)',
                        'Lipase'
                    ],
                    a: 2,
                    s: 'Salivary amylase (ptyalin) begins starch digestion in the mouth at pH ~6.8, breaking it into maltose and dextrins. Action stops in the acidic stomach. Pancreatic amylase continues starch digestion in the duodenum.'
                }
            ],
            hard: [
                {
                    q: 'The Bohr effect describes how:',
                    o: [
                        'Temperature affects O₂ binding',
                        'Increased CO₂ and H⁺ decrease hemoglobin\'s O₂ affinity',
                        'Exercise increases lung capacity',
                        'Altitude affects breathing'
                    ],
                    a: 1,
                    s: 'Bohr effect: increased CO₂/H⁺ (lower pH) shifts the O₂ dissociation curve to the right, reducing Hb-O₂ affinity, promoting O₂ release at active tissues. This ensures more O₂ delivery where it is needed most.'
                },
                {
                    q: 'Chloride shift in blood involves:',
                    o: [
                        'Cl⁻ moving into RBCs as HCO₃⁻ moves out',
                        'Cl⁻ moving out of RBCs',
                        'Na⁺ entering RBCs',
                        'K⁺ leaving RBCs'
                    ],
                    a: 0,
                    s: 'Chloride shift (Hamburger phenomenon): CO₂ in RBCs → H₂CO₃ → H⁺ + HCO₃⁻. HCO₃⁻ exits RBCs to plasma via band 3 protein; Cl⁻ enters to maintain electrical neutrality.'
                },
                {
                    q: 'The migrating myoelectric complex (MMC) in the GI tract:',
                    o: [
                        'Occurs during feeding',
                        'Is a pattern of smooth muscle contractions during fasting',
                        'Only occurs in the stomach',
                        'Is controlled by somatic nerves'
                    ],
                    a: 1,
                    s: 'MMC is a cyclical pattern of electromechanical contractions in the GI tract during fasting (interdigestive period), sweeping undigested material and bacteria distally ("intestinal housekeeper"). Regulated by motilin hormone.'
                },
                {
                    q: 'The Frank-Starling law states that:',
                    o: [
                        'Heart rate is constant',
                        'Cardiac output increases with increased venous return',
                        'Blood pressure determines heart rate',
                        'Stroke volume is fixed'
                    ],
                    a: 1,
                    s: 'Frank-Starling law: the greater the stretch of ventricular myocardium (due to increased venous return/preload), the greater the force of contraction and stroke volume. The heart pumps whatever volume it receives.'
                },
                {
                    q: 'Residual volume of the lung is normally about:',
                    o: [
                        '500 mL',
                        '1200 mL',
                        '3000 mL',
                        '5800 mL'
                    ],
                    a: 1,
                    s: 'Residual volume (RV) ≈ 1100-1200 mL — air remaining after maximal expiration. It prevents lung collapse (atelectasis). RV cannot be measured by spirometry; requires body plethysmography or gas dilution.'
                }
            ]
        },
        {
            name: 'Excretion & Endocrine System',
            slug: 'excretion-endocrine',
            easy: [
                {
                    q: 'The main nitrogenous waste product excreted by humans is:',
                    o: [
                        'Uric acid',
                        'Ammonia',
                        'Urea',
                        'Creatinine'
                    ],
                    a: 2,
                    s: 'Humans are ureotelic — they excrete mainly urea (synthesized in the liver via the urea cycle from ammonia). Urea is less toxic than ammonia and requires less water for excretion.'
                },
                {
                    q: 'Which hormone increases blood glucose levels?',
                    o: [
                        'Insulin',
                        'Glucagon',
                        'Melatonin',
                        'Calcitonin'
                    ],
                    a: 1,
                    s: 'Glucagon (from α-cells of islets of Langerhans) increases blood glucose by stimulating glycogenolysis and gluconeogenesis in the liver. It is the hyperglycemic hormone (antagonist of insulin).'
                },
                {
                    q: 'The master endocrine gland is:',
                    o: [
                        'Thyroid',
                        'Pituitary gland',
                        'Pineal gland',
                        'Adrenal gland'
                    ],
                    a: 1,
                    s: 'The pituitary gland (hypophysis) is the master gland because it secretes hormones that control other endocrine glands: TSH → thyroid, ACTH → adrenal cortex, FSH/LH → gonads, GH → growth.'
                },
                {
                    q: 'Urine is stored in the:',
                    o: [
                        'Kidney',
                        'Ureter',
                        'Urinary bladder',
                        'Urethra'
                    ],
                    a: 2,
                    s: 'Urine produced by the kidneys travels through ureters to the urinary bladder, where it is stored until micturition (voiding). The bladder can hold about 300-500 mL of urine.'
                },
                {
                    q: 'Insulin is produced by:',
                    o: [
                        'α-cells of pancreas',
                        'β-cells of islets of Langerhans',
                        'Liver cells',
                        'Adrenal medulla'
                    ],
                    a: 1,
                    s: 'Insulin is produced by β-cells of the islets of Langerhans in the pancreas. It is a hypoglycemic hormone that lowers blood glucose by promoting glucose uptake and glycogen synthesis.'
                }
            ],
            medium: [
                {
                    q: 'ADH (antidiuretic hormone) acts primarily on:',
                    o: [
                        'Proximal convoluted tubule',
                        'Distal convoluted tubule and collecting duct',
                        'Glomerulus',
                        'Loop of Henle only'
                    ],
                    a: 1,
                    s: 'ADH (vasopressin) increases water permeability of DCT and collecting duct by inserting aquaporin-2 channels. This increases water reabsorption, producing concentrated urine. Deficiency → diabetes insipidus.'
                },
                {
                    q: 'The thyroid gland requires which element for hormone synthesis?',
                    o: [
                        'Calcium',
                        'Iron',
                        'Iodine',
                        'Zinc'
                    ],
                    a: 2,
                    s: 'Iodine is essential for synthesis of thyroid hormones T₃ (triiodothyronine) and T₄ (thyroxine). Iodine deficiency causes goitre (thyroid enlargement) and cretinism in children.'
                },
                {
                    q: 'Aldosterone acts on the kidney to:',
                    o: [
                        'Decrease sodium reabsorption',
                        'Increase sodium reabsorption and potassium excretion',
                        'Decrease urine volume',
                        'Increase GFR'
                    ],
                    a: 1,
                    s: 'Aldosterone (mineralocorticoid from adrenal cortex) increases Na⁺ reabsorption and K⁺ secretion in the DCT and collecting duct. This retains water (follows Na⁺), increasing blood volume and pressure.'
                },
                {
                    q: 'The normal GFR (Glomerular Filtration Rate) is approximately:',
                    o: [
                        '25 mL/min',
                        '125 mL/min',
                        '500 mL/min',
                        '5 mL/min'
                    ],
                    a: 1,
                    s: 'GFR ≈ 125 mL/min or 180 L/day. About 99% of filtrate is reabsorbed; only 1-1.5 L is excreted as urine daily. GFR is regulated by JGA and autoregulation.'
                },
                {
                    q: 'Which hormone is called the "fight or flight" hormone?',
                    o: [
                        'Cortisol',
                        'Insulin',
                        'Adrenaline (epinephrine)',
                        'Thyroxine'
                    ],
                    a: 2,
                    s: 'Adrenaline (epinephrine) from adrenal medulla triggers fight-or-flight: increased heart rate, blood pressure, glucose release, bronchodilation, pupil dilation — preparing body for emergency response.'
                },
                {
                    q: 'Counter-current mechanism in the loop of Henle helps in:',
                    o: [
                        'Reabsorption of glucose',
                        'Concentration of urine',
                        'Filtration of blood',
                        'Secretion of hormones'
                    ],
                    a: 1,
                    s: 'The counter-current mechanism between descending and ascending limbs of loop of Henle creates an osmotic gradient in the renal medulla, enabling production of concentrated urine (essential for water conservation).'
                }
            ],
            hard: [
                {
                    q: 'Renin-Angiotensin-Aldosterone System (RAAS) is activated by:',
                    o: [
                        'High blood pressure',
                        'Low blood pressure / low Na⁺ at macula densa',
                        'High glucose levels',
                        'High potassium levels'
                    ],
                    a: 1,
                    s: 'RAAS is activated when JG cells detect low blood pressure or macula densa detects low NaCl: Renin → Angiotensinogen → Angiotensin I → (ACE) → Angiotensin II → vasoconstriction + aldosterone secretion → ↑BP.'
                },
                {
                    q: 'Atrial natriuretic peptide (ANP) is released when:',
                    o: [
                        'Blood volume is low',
                        'Blood volume is high (atrial stretch)',
                        'Blood glucose is high',
                        'Calcium levels are low'
                    ],
                    a: 1,
                    s: 'ANP is released by atrial myocytes when atria are stretched (high blood volume). It inhibits Na⁺ reabsorption, promotes natriuresis and diuresis, vasodilates, and inhibits renin and aldosterone — lowering blood pressure.'
                },
                {
                    q: 'The hypothalamo-hypophyseal portal system connects:',
                    o: [
                        'Hypothalamus to anterior pituitary',
                        'Hypothalamus to posterior pituitary',
                        'Pituitary to thyroid',
                        'Pituitary to adrenal'
                    ],
                    a: 0,
                    s: 'The hypothalamo-hypophyseal portal system carries releasing/inhibiting hormones from hypothalamus directly to anterior pituitary via portal blood vessels, regulating its hormone secretion (GnRH, TRH, CRH, GHRH, etc.).'
                },
                {
                    q: 'Calcitonin and parathyroid hormone have _____ effects on blood calcium:',
                    o: [
                        'Similar (both increase Ca²⁺)',
                        'Antagonistic (calcitonin decreases, PTH increases Ca²⁺)',
                        'No effect on Ca²⁺',
                        'Synergistic'
                    ],
                    a: 1,
                    s: 'Calcitonin (from thyroid C-cells) lowers blood Ca²⁺ by inhibiting osteoclasts and promoting Ca²⁺ deposition in bones. PTH (from parathyroid) raises blood Ca²⁺ by stimulating osteoclasts, renal reabsorption, and vitamin D activation.'
                },
                {
                    q: 'In the nephron, which segment is impermeable to water?',
                    o: [
                        'Descending limb of Henle',
                        'Ascending limb of Henle',
                        'PCT',
                        'Collecting duct with ADH'
                    ],
                    a: 1,
                    s: 'The ascending limb of loop of Henle is impermeable to water but actively transports NaCl out. This creates the medullary osmotic gradient. The descending limb is permeable to water but not to solutes.'
                }
            ]
        }
    ]
};
/* ──── Chapter 3: Human Reproduction & Health ──── */ const humanReproduction = {
    name: 'Human Reproduction & Health',
    slug: 'human-reproduction-health',
    topics: [
        {
            name: 'Reproductive System & Development',
            slug: 'reproduction-development',
            easy: [
                {
                    q: 'Fertilization in humans normally occurs in:',
                    o: [
                        'Uterus',
                        'Ampulla of fallopian tube',
                        'Ovary',
                        'Vagina'
                    ],
                    a: 1,
                    s: 'Fertilization typically occurs in the ampullary-isthmic junction of the fallopian tube (oviduct). The zygote then travels to the uterus over 3-4 days, undergoing cleavage divisions.'
                },
                {
                    q: 'The number of chromosomes in human gametes is:',
                    o: [
                        '46',
                        '23',
                        '44',
                        '22'
                    ],
                    a: 1,
                    s: 'Human gametes (sperm and egg) are haploid with 23 chromosomes (22 autosomes + 1 sex chromosome). Somatic cells are diploid with 46 chromosomes (44 autosomes + 2 sex chromosomes).'
                },
                {
                    q: 'Menstrual cycle in human females is approximately:',
                    o: [
                        '14 days',
                        '28 days',
                        '7 days',
                        '42 days'
                    ],
                    a: 1,
                    s: 'The menstrual cycle is approximately 28 days: menstrual phase (days 1-5), follicular phase (days 6-13), ovulation (day 14), luteal phase (days 15-28). Regulated by FSH, LH, estrogen, progesterone.'
                },
                {
                    q: 'The placenta connects:',
                    o: [
                        'Mother to father',
                        'Embryo/fetus to uterine wall',
                        'Two fetuses',
                        'Ovary to uterus'
                    ],
                    a: 1,
                    s: 'Placenta is a temporary organ connecting the developing fetus to the uterine wall. It provides nutrients and O₂, removes wastes, and produces hormones (hCG, hPL, estrogen, progesterone).'
                },
                {
                    q: 'Which hormone triggers ovulation?',
                    o: [
                        'FSH',
                        'LH surge',
                        'Progesterone',
                        'Prolactin'
                    ],
                    a: 1,
                    s: 'A surge of LH (luteinizing hormone) from the anterior pituitary triggers ovulation — rupture of mature Graafian follicle and release of the secondary oocyte on approximately day 14 of the cycle.'
                }
            ],
            medium: [
                {
                    q: 'Spermatogenesis produces _____ sperms from one primary spermatocyte:',
                    o: [
                        '1',
                        '2',
                        '4',
                        '8'
                    ],
                    a: 2,
                    s: 'One primary spermatocyte undergoes meiosis I → 2 secondary spermatocytes → meiosis II → 4 spermatids → spermiogenesis → 4 spermatozoa. In oogenesis, one primary oocyte → 1 egg + 3 polar bodies.'
                },
                {
                    q: 'The acrosome reaction involves:',
                    o: [
                        'Release of enzymes to penetrate egg coats',
                        'Midpiece energy production',
                        'Tail movement',
                        'Nuclear condensation'
                    ],
                    a: 0,
                    s: 'During acrosome reaction, the acrosome (modified Golgi) at the sperm tip releases hydrolytic enzymes (hyaluronidase, acrosin) that digest the corona radiata and zona pellucida of the egg, enabling penetration.'
                },
                {
                    q: 'Implantation of the blastocyst occurs:',
                    o: [
                        'Immediately after fertilization',
                        'About 6-7 days after fertilization',
                        'After 1 month',
                        'In the fallopian tube'
                    ],
                    a: 1,
                    s: 'Implantation occurs about 6-7 days after fertilization. The blastocyst (with trophoblast outer layer) embeds in the endometrium of the posterior uterine wall. Trophoblast cells invade the endometrium.'
                },
                {
                    q: 'During pregnancy, which hormone maintains the corpus luteum in early stages?',
                    o: [
                        'FSH',
                        'LH',
                        'hCG (human chorionic gonadotropin)',
                        'Oxytocin'
                    ],
                    a: 2,
                    s: 'hCG (from trophoblast/placenta) maintains the corpus luteum during early pregnancy (first trimester), ensuring continued progesterone production. After 3 months, the placenta takes over progesterone production. hCG is detected in pregnancy tests.'
                },
                {
                    q: 'The three germ layers formed during gastrulation are:',
                    o: [
                        'Endoderm, mesoderm, ectoderm',
                        'Epidermis, dermis, hypodermis',
                        'Cortex, medulla, pelvis',
                        'Spongy, compact, cartilage'
                    ],
                    a: 0,
                    s: 'Gastrulation forms three germ layers: ectoderm (skin, nervous system), mesoderm (muscles, bones, blood, kidneys), endoderm (gut lining, liver, lungs, thyroid). This is a critical developmental event.'
                },
                {
                    q: 'Colostrum is important for the newborn because it contains:',
                    o: [
                        'High fat content',
                        'Antibodies (IgA) for passive immunity',
                        'Vitamins only',
                        'Growth hormone'
                    ],
                    a: 1,
                    s: 'Colostrum (first milk, 2-3 days postpartum) is rich in IgA antibodies, providing passive immunity to the newborn. It also contains lymphocytes, lactoferrin, and growth factors.'
                }
            ],
            hard: [
                {
                    q: 'The correct sequence of spermatogenesis is:',
                    o: [
                        'Spermatogonia → spermatids → spermatocytes → spermatozoa',
                        'Spermatogonia → primary spermatocytes → secondary spermatocytes → spermatids → spermatozoa',
                        'Spermatids → spermatogonia → spermatocytes → spermatozoa',
                        'Spermatozoa → spermatids → spermatocytes → spermatogonia'
                    ],
                    a: 1,
                    s: 'Spermatogenesis: Spermatogonia (2n, mitosis) → primary spermatocytes (2n, meiosis I) → secondary spermatocytes (n, meiosis II) → spermatids (n) → spermiogenesis → spermatozoa (n). Takes about 74 days.'
                },
                {
                    q: 'The zona pellucida hardens after fertilization to prevent polyspermy through:',
                    o: [
                        'Cortical reaction',
                        'Acrosomal reaction',
                        'Capacitation',
                        'Sperm chemotaxis'
                    ],
                    a: 0,
                    s: 'Cortical reaction: after sperm entry, cortical granules in the egg release enzymes that modify zona pellucida glycoproteins (zona reaction), hardening it and blocking additional sperm (prevents polyspermy).'
                },
                {
                    q: 'Ectopic pregnancy most commonly occurs in:',
                    o: [
                        'Ovary',
                        'Fallopian tube',
                        'Cervix',
                        'Peritoneal cavity'
                    ],
                    a: 1,
                    s: 'Most ectopic pregnancies (~95%) occur in the fallopian tube (tubal pregnancy). The embryo implants outside the uterus, which is dangerous as the tube can rupture, causing life-threatening hemorrhage.'
                },
                {
                    q: 'Sertoli cells in the testes function to:',
                    o: [
                        'Produce testosterone',
                        'Nourish and support developing sperm',
                        'Store sperm',
                        'Produce LH'
                    ],
                    a: 1,
                    s: 'Sertoli cells (nurse/sustentacular cells) in seminiferous tubules nourish developing spermatogenic cells, form the blood-testis barrier, secrete inhibin (negative feedback on FSH), and produce androgen-binding protein.'
                },
                {
                    q: 'The spiral arteries of the endometrium are important because:',
                    o: [
                        'They supply the myometrium',
                        'Their constriction causes menstruation',
                        'They produce hormones',
                        'They filter blood'
                    ],
                    a: 1,
                    s: 'Spiral arteries supply the functional layer of endometrium. At the end of the luteal phase (falling progesterone), they constrict → ischemia → tissue necrosis → menstrual bleeding. They also supply the placenta during pregnancy.'
                }
            ]
        },
        {
            name: 'Human Health & Immunity',
            slug: 'health-immunity',
            easy: [
                {
                    q: 'Vaccination provides which type of immunity?',
                    o: [
                        'Natural passive',
                        'Artificial active',
                        'Natural active',
                        'Artificial passive'
                    ],
                    a: 1,
                    s: 'Vaccination provides artificial active immunity — antigens (weakened/killed pathogens) are introduced, stimulating the immune system to produce antibodies and memory cells for future protection.'
                },
                {
                    q: 'The causative organism of AIDS is:',
                    o: [
                        'Bacteria',
                        'HIV (Human Immunodeficiency Virus)',
                        'Fungus',
                        'Protozoan'
                    ],
                    a: 1,
                    s: 'HIV is a retrovirus (RNA virus) that infects CD4⁺ T helper cells, leading to their progressive depletion. When CD4⁺ count drops below 200/μL, opportunistic infections occur — this stage is AIDS.'
                },
                {
                    q: 'Antibodies are produced by:',
                    o: [
                        'T cells',
                        'B cells (plasma cells)',
                        'Red blood cells',
                        'Platelets'
                    ],
                    a: 1,
                    s: 'B lymphocytes, upon activation, differentiate into plasma cells that produce and secrete antibodies (immunoglobulins). Each antibody is specific to one antigen (antigen-antibody specificity).'
                },
                {
                    q: 'Malaria is transmitted by:',
                    o: [
                        'Housefly',
                        'Female Anopheles mosquito',
                        'Male mosquito',
                        'Contaminated water'
                    ],
                    a: 1,
                    s: 'Malaria is transmitted by the bite of infected female Anopheles mosquito. Plasmodium (protozoan) is injected as sporozoites from mosquito salivary glands into human blood.'
                },
                {
                    q: 'Which type of immunity is present from birth?',
                    o: [
                        'Acquired immunity',
                        'Innate (natural) immunity',
                        'Artificial immunity',
                        'Adaptive immunity'
                    ],
                    a: 1,
                    s: 'Innate immunity is non-specific, present from birth, and provides the first line of defense: skin, mucous membranes, phagocytes, NK cells, complement, interferons. It doesn\'t improve with repeated exposure.'
                }
            ],
            medium: [
                {
                    q: 'Cell-mediated immunity is primarily carried out by:',
                    o: [
                        'B lymphocytes',
                        'T lymphocytes',
                        'Neutrophils',
                        'Basophils'
                    ],
                    a: 1,
                    s: 'T lymphocytes mediate cell-mediated immunity (CMI): cytotoxic T cells kill infected cells, helper T cells activate other immune cells, and memory T cells provide long-term protection. Important against intracellular pathogens and cancer.'
                },
                {
                    q: 'An autoimmune disease is characterized by:',
                    o: [
                        'Immune system attacking foreign antigens',
                        'Immune system attacking self-antigens/tissues',
                        'Weakened immune system',
                        'Allergic reaction to food'
                    ],
                    a: 1,
                    s: 'In autoimmune diseases, the immune system fails to distinguish self from non-self and attacks the body\'s own tissues. Examples: rheumatoid arthritis (joints), Type 1 diabetes (β-cells), lupus (multiple organs).'
                },
                {
                    q: 'DPT vaccine provides protection against:',
                    o: [
                        'Diphtheria, Plague, Tetanus',
                        'Diphtheria, Pertussis, Tetanus',
                        'Dengue, Polio, Typhoid',
                        'Diphtheria, Pneumonia, Tuberculosis'
                    ],
                    a: 1,
                    s: 'DPT/DTaP vaccine provides active immunity against Diphtheria (Corynebacterium), Pertussis/whooping cough (Bordetella pertussis), Tetanus (Clostridium tetani). Given in childhood immunization schedule.'
                },
                {
                    q: 'Type I hypersensitivity (allergy) is mediated by:',
                    o: [
                        'IgG',
                        'IgE',
                        'IgM',
                        'IgA'
                    ],
                    a: 1,
                    s: 'Type I (immediate) hypersensitivity is mediated by IgE antibodies. IgE binds to mast cell receptors; re-exposure to allergen cross-links IgE → mast cell degranulation → histamine release → allergic symptoms.'
                },
                {
                    q: 'Widal test is used to diagnose:',
                    o: [
                        'Malaria',
                        'Typhoid fever',
                        'Tuberculosis',
                        'AIDS'
                    ],
                    a: 1,
                    s: 'Widal test detects antibodies (agglutinins) against Salmonella typhi O and H antigens in patient serum for diagnosis of typhoid fever. A rising titre is significant for diagnosis.'
                },
                {
                    q: 'Interferons are produced by:',
                    o: [
                        'Only B cells',
                        'Virus-infected cells (various cell types)',
                        'Only macrophages',
                        'Only T cells'
                    ],
                    a: 1,
                    s: 'Interferons (IFN-α, β, γ) are cytokines produced by virus-infected cells. They signal neighboring uninfected cells to activate antiviral defenses, inhibiting viral replication. Part of innate immune response.'
                }
            ],
            hard: [
                {
                    q: 'MHC class I molecules present antigens to:',
                    o: [
                        'B cells',
                        'CD8⁺ cytotoxic T cells',
                        'CD4⁺ helper T cells',
                        'Natural killer cells only'
                    ],
                    a: 1,
                    s: 'MHC class I molecules (on all nucleated cells) present intracellular (endogenous) antigens to CD8⁺ cytotoxic T cells. MHC class II (on APCs) present extracellular antigens to CD4⁺ helper T cells.'
                },
                {
                    q: 'The complement system enhances immunity by:',
                    o: [
                        'Producing antibodies',
                        'Opsonization, membrane attack complex (MAC), and inflammation',
                        'Making T cells',
                        'Producing interferons'
                    ],
                    a: 1,
                    s: 'Complement system (C1-C9 proteins) enhances innate and adaptive immunity through: opsonization (C3b coating for phagocytosis), MAC formation (C5b-C9 creates pores in pathogen membranes), and inflammation (C3a, C5a as anaphylatoxins).'
                },
                {
                    q: 'Passive immunity differs from active immunity in that:',
                    o: [
                        'It involves memory cells',
                        'It provides immediate but temporary protection without memory',
                        'It lasts longer than active immunity',
                        'It requires antigen exposure'
                    ],
                    a: 1,
                    s: 'Passive immunity involves transfer of pre-formed antibodies (no active immune response by recipient). It provides immediate protection but is temporary (weeks). No memory cells are formed. Examples: maternal IgG, antiserum injection.'
                },
                {
                    q: 'The life cycle of Plasmodium in humans involves:',
                    o: [
                        'Only asexual reproduction',
                        'Only sexual reproduction',
                        'Asexual reproduction (schizogony) in liver and blood',
                        'Sexual reproduction in blood'
                    ],
                    a: 2,
                    s: 'In humans, Plasmodium undergoes asexual reproduction: liver schizogony (in hepatocytes) and erythrocytic schizogony (in RBCs). Sexual reproduction (gamogony and sporogony) occurs in the mosquito vector.'
                },
                {
                    q: 'Clonal selection theory states that:',
                    o: [
                        'All T cells are identical',
                        'Each lymphocyte has a specific receptor; antigen selects and expands that specific clone',
                        'Antigens create new receptors',
                        'Only macrophages respond to antigens'
                    ],
                    a: 1,
                    s: 'Clonal selection theory: each lymphocyte (B/T cell) pre-exists with a unique receptor. When an antigen binds its matching receptor, that specific lymphocyte is selected, activated, and clonally expanded (proliferates) to mount a specific response.'
                }
            ]
        }
    ]
};
/* ──── Chapter 4: Ecology & Environment ──── */ const ecology = {
    name: 'Ecology & Environment',
    slug: 'ecology-environment',
    topics: [
        {
            name: 'Ecosystem & Biodiversity',
            slug: 'ecosystem-biodiversity',
            easy: [
                {
                    q: 'The 10% law of energy transfer was given by:',
                    o: [
                        'Odum',
                        'Lindeman',
                        'Tansley',
                        'Haeckel'
                    ],
                    a: 1,
                    s: 'Lindeman (1942) proposed the 10% law: only about 10% of energy is transferred from one trophic level to the next. The remaining 90% is lost as heat through respiration at each level.'
                },
                {
                    q: 'Primary producers in most ecosystems are:',
                    o: [
                        'Herbivores',
                        'Decomposers',
                        'Green plants (autotrophs)',
                        'Carnivores'
                    ],
                    a: 2,
                    s: 'Primary producers (autotrophs) use photosynthesis to convert inorganic carbon (CO₂) to organic molecules. They form the base of the food chain. In aquatic ecosystems, phytoplankton are primary producers.'
                },
                {
                    q: 'The number of individuals per unit area is called:',
                    o: [
                        'Biomass',
                        'Population density',
                        'Standing crop',
                        'Carrying capacity'
                    ],
                    a: 1,
                    s: 'Population density = number of individuals per unit area (or volume). It can be measured by direct counting, quadrat methods, or mark-recapture methods.'
                },
                {
                    q: 'Which of the following is a greenhouse gas?',
                    o: [
                        'Nitrogen',
                        'Oxygen',
                        'Carbon dioxide',
                        'Argon'
                    ],
                    a: 2,
                    s: 'CO₂ is a major greenhouse gas that absorbs and re-emits infrared radiation, trapping heat in the atmosphere. Other GHGs: methane (CH₄), N₂O, CFCs, water vapor.'
                },
                {
                    q: 'Decomposers are also called:',
                    o: [
                        'Producers',
                        'Consumers',
                        'Saprotrophs',
                        'Autotrophs'
                    ],
                    a: 2,
                    s: 'Decomposers (saprotrophs/saprophytes) break down dead organic matter, recycling nutrients back to the ecosystem. Examples: bacteria and fungi. They are essential for nutrient cycling.'
                }
            ],
            medium: [
                {
                    q: 'An ecological pyramid that is always upright is the pyramid of:',
                    o: [
                        'Numbers',
                        'Biomass',
                        'Energy',
                        'All of the above'
                    ],
                    a: 2,
                    s: 'The pyramid of energy is always upright because energy decreases at each trophic level (10% law). Pyramids of numbers and biomass can be inverted (e.g., tree ecosystem for numbers, aquatic for biomass).'
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
                    s: 'A.G. Tansley (1935) coined the term "ecosystem" — a functional unit of nature comprising living organisms (biotic community) and their non-living environment (abiotic factors) interacting as a system.'
                },
                {
                    q: 'Eutrophication is caused by:',
                    o: [
                        'Deforestation',
                        'Excess nutrients (N, P) leading to algal bloom',
                        'Acid rain',
                        'UV radiation'
                    ],
                    a: 1,
                    s: 'Eutrophication: excessive nutrients (nitrogen, phosphorus from fertilizers/sewage) in water bodies → algal bloom → algal death → bacterial decomposition → O₂ depletion → fish kills. Creates dead zones.'
                },
                {
                    q: 'In ecological succession, the first colonizers are called:',
                    o: [
                        'Climax community',
                        'Pioneer species',
                        'Seral community',
                        'Apex predators'
                    ],
                    a: 1,
                    s: 'Pioneer species are the first organisms to colonize a bare/disturbed area (primary succession). Examples: lichens and mosses on rocks. They modify the habitat, making it suitable for later species.'
                },
                {
                    q: 'Biomagnification refers to:',
                    o: [
                        'Increase in population size',
                        'Increasing concentration of toxins at higher trophic levels',
                        'Increase in biomass',
                        'Growth of organisms'
                    ],
                    a: 1,
                    s: 'Biomagnification: non-biodegradable toxins (DDT, heavy metals, PCBs) accumulate and increase in concentration at each successive trophic level. Top predators have highest concentrations.'
                },
                {
                    q: 'The ozone layer is primarily found in the:',
                    o: [
                        'Troposphere',
                        'Stratosphere',
                        'Mesosphere',
                        'Thermosphere'
                    ],
                    a: 1,
                    s: 'The ozone layer (O₃) is concentrated in the stratosphere (15-35 km altitude). It absorbs harmful UV-B and UV-C radiation from the sun, protecting life on Earth. CFCs cause ozone depletion.'
                }
            ],
            hard: [
                {
                    q: 'The species-area relationship is expressed as:',
                    o: [
                        'S = CA^z (log S = log C + z log A)',
                        'S = A/C',
                        'S = A × z',
                        'S = log A only'
                    ],
                    a: 0,
                    s: 'Species-area relationship (Alexander von Humboldt): log S = log C + z × log A, or S = CA^z. S = species richness, A = area, C = y-intercept, z = regression coefficient (slope, typically 0.1-0.3 for continental areas).'
                },
                {
                    q: 'Net primary productivity (NPP) equals:',
                    o: [
                        'GPP + Respiration',
                        'GPP − Respiration',
                        'Respiration only',
                        'GPP × Respiration'
                    ],
                    a: 1,
                    s: 'NPP = GPP − R. Gross Primary Productivity (GPP) is total carbon fixed by photosynthesis. Net Primary Productivity is what remains after subtracting autotrophic respiration. NPP is available for consumers.'
                },
                {
                    q: 'The Red Queen hypothesis explains:',
                    o: [
                        'Why species go extinct',
                        'Why species must continuously evolve to maintain fitness relative to co-evolving species',
                        'Why invasive species succeed',
                        'Why mutations are random'
                    ],
                    a: 1,
                    s: 'Red Queen hypothesis (Van Valen): species must continuously adapt and evolve not just to gain advantage but to maintain their fitness relative to other co-evolving organisms (like predator-prey arms race). "It takes all the running you can do, to keep in the same place."'
                },
                {
                    q: 'In the carbon cycle, the largest reservoir of carbon is:',
                    o: [
                        'Atmosphere',
                        'Oceans (dissolved inorganic carbon + sediments)',
                        'Living organisms',
                        'Fossil fuels'
                    ],
                    a: 1,
                    s: 'The oceans are the largest active carbon reservoir (~38,000 Gt C as dissolved inorganic carbon). Sedimentary rocks hold even more (long-term reservoir). Atmosphere has ~800 Gt C. Living biomass ~550 Gt C.'
                },
                {
                    q: 'Keystone species are important because:',
                    o: [
                        'They are the most abundant',
                        'Their removal causes disproportionate changes in ecosystem structure',
                        'They are always top predators',
                        'They are pioneer species'
                    ],
                    a: 1,
                    s: 'Keystone species have a disproportionately large effect on their ecosystem relative to their abundance. Their removal causes significant changes in biodiversity and ecosystem function. Example: sea otters, wolves in Yellowstone.'
                }
            ]
        },
        {
            name: 'Environmental Issues & Conservation',
            slug: 'environment-conservation',
            easy: [
                {
                    q: 'The Montreal Protocol addresses:',
                    o: [
                        'Climate change',
                        'Ozone layer depletion (CFC reduction)',
                        'Biodiversity loss',
                        'Water pollution'
                    ],
                    a: 1,
                    s: 'Montreal Protocol (1987) is an international treaty to phase out ozone-depleting substances (ODS) like CFCs, halons, and carbon tetrachloride. It is considered the most successful environmental treaty.'
                },
                {
                    q: 'Ex-situ conservation includes:',
                    o: [
                        'National parks',
                        'Wildlife sanctuaries',
                        'Zoos and botanical gardens',
                        'Biosphere reserves'
                    ],
                    a: 2,
                    s: 'Ex-situ conservation: protecting species outside their natural habitat — zoos, botanical gardens, seed banks (e.g., Svalbard), captive breeding. In-situ conservation: national parks, sanctuaries, biosphere reserves.'
                },
                {
                    q: 'Which of the following is a biodiversity hotspot in India?',
                    o: [
                        'Thar Desert',
                        'Western Ghats',
                        'Indo-Gangetic plain',
                        'Deccan Plateau'
                    ],
                    a: 1,
                    s: 'Western Ghats is one of 36 global biodiversity hotspots. A hotspot must have ≥1500 endemic plant species and have lost ≥70% of original habitat. India has 4 hotspots: Western Ghats, Himalayas, Indo-Burma, Sundaland.'
                },
                {
                    q: 'BOD (Biochemical Oxygen Demand) is a measure of:',
                    o: [
                        'Air pollution',
                        'Organic pollution in water',
                        'Soil fertility',
                        'Noise intensity'
                    ],
                    a: 1,
                    s: 'BOD measures the amount of O₂ consumed by microorganisms to decompose organic matter in water. High BOD indicates high organic pollution (sewage, industrial waste). Clean water: BOD < 5 mg/L.'
                },
                {
                    q: 'Deforestation leads to:',
                    o: [
                        'Increased biodiversity',
                        'Soil erosion and loss of habitat',
                        'Decreased CO₂ levels',
                        'Increased rainfall'
                    ],
                    a: 1,
                    s: 'Deforestation causes: soil erosion, loss of biodiversity and habitat, increased CO₂ (less carbon fixation), desertification, disrupted water cycle, and climate change.'
                }
            ],
            medium: [
                {
                    q: 'The Kyoto Protocol (1997) aimed to reduce:',
                    o: [
                        'Ozone-depleting substances',
                        'Greenhouse gas emissions',
                        'Plastic waste',
                        'Nuclear waste'
                    ],
                    a: 1,
                    s: 'Kyoto Protocol set binding targets for industrialized countries to reduce greenhouse gas emissions (CO₂, CH₄, N₂O, HFCs, PFCs, SF₆) by about 5% below 1990 levels during 2008-2012.'
                },
                {
                    q: 'Biological magnification of DDT is highest in:',
                    o: [
                        'Primary producers',
                        'Primary consumers',
                        'Secondary consumers',
                        'Top-level carnivores'
                    ],
                    a: 3,
                    s: 'Non-biodegradable pesticides like DDT undergo biomagnification — concentration increases at each trophic level. Highest concentration is in top-level carnivores (e.g., raptors). This caused eggshell thinning in birds of prey.'
                },
                {
                    q: 'IUCN Red List categories for threatened species include:',
                    o: [
                        'Common, Rare, Abundant',
                        'Vulnerable (VU), Endangered (EN), Critically Endangered (CR)',
                        'Type I, II, III',
                        'Alpha, Beta, Gamma'
                    ],
                    a: 1,
                    s: 'IUCN Red List threat categories (in order): Least Concern → Near Threatened → Vulnerable (VU) → Endangered (EN) → Critically Endangered (CR) → Extinct in the Wild → Extinct.'
                },
                {
                    q: 'Integrated pest management (IPM) involves:',
                    o: [
                        'Using only chemical pesticides',
                        'Combining biological, cultural, and minimal chemical control methods',
                        'Using only genetic modification',
                        'Ignoring pest damage'
                    ],
                    a: 1,
                    s: 'IPM combines biological control (predators, parasitoids), cultural practices (crop rotation), mechanical methods (traps), and judicious chemical use as a last resort. It minimizes environmental damage and pesticide resistance.'
                },
                {
                    q: 'Acid rain has pH less than:',
                    o: [
                        '7.0',
                        '5.6',
                        '6.5',
                        '4.0'
                    ],
                    a: 1,
                    s: 'Normal rain has pH ~5.6 (slightly acidic due to dissolved CO₂). Acid rain has pH < 5.6, caused by SO₂ and NOₓ from fossil fuel combustion forming H₂SO₄ and HNO₃. It damages aquatic ecosystems, soil, and buildings.'
                },
                {
                    q: 'Sacred groves are an example of:',
                    o: [
                        'Ex-situ conservation',
                        'In-situ conservation by local communities',
                        'Biosphere reserves',
                        'Captive breeding'
                    ],
                    a: 1,
                    s: 'Sacred groves are forest patches protected by local communities for religious/cultural reasons. They are examples of community-based in-situ conservation and preserve unique biodiversity.'
                }
            ],
            hard: [
                {
                    q: 'The concept of biodiversity was popularized by:',
                    o: [
                        'Charles Darwin',
                        'Edward O. Wilson',
                        'Rachel Carson',
                        'Paul Ehrlich'
                    ],
                    a: 1,
                    s: 'Edward O. Wilson (1988) popularized the term "biodiversity" and is often called the "father of biodiversity." Rachel Carson\'s "Silent Spring" (1962) highlighted pesticide dangers. Ehrlich studied population ecology.'
                },
                {
                    q: 'Rivet popper hypothesis by Paul Ehrlich compares species loss in an ecosystem to:',
                    o: [
                        'Removing rivets from an airplane wing',
                        'Cutting branches of a tree',
                        'Removing bricks from a wall',
                        'Draining water from a lake'
                    ],
                    a: 0,
                    s: 'Rivet popper hypothesis: losing species is like popping rivets from an airplane wing — initially no apparent effect, but beyond a threshold, the wing (ecosystem) collapses. Each species plays a role in ecosystem integrity.'
                },
                {
                    q: 'Bioremediation uses:',
                    o: [
                        'Chemicals to clean pollutants',
                        'Microorganisms to degrade/detoxify pollutants',
                        'Physical methods (filtering)',
                        'Thermal treatment'
                    ],
                    a: 1,
                    s: 'Bioremediation uses living organisms (bacteria, fungi, plants) to detoxify or remove pollutants from contaminated environments. Examples: Pseudomonas for oil spills, phytoremediation using plants for heavy metals.'
                },
                {
                    q: 'Chipko movement (1973) was related to:',
                    o: [
                        'Wildlife protection',
                        'Forest conservation (preventing tree felling)',
                        'Water conservation',
                        'Air pollution'
                    ],
                    a: 1,
                    s: 'Chipko movement was a forest conservation movement in Garhwal Himalayas (1973) where villagers hugged trees to prevent commercial felling. Led by Sunderlal Bahuguna and others. "Chipko" means "to embrace/hug."'
                },
                {
                    q: 'The Ramsar Convention deals with:',
                    o: [
                        'Endangered species trade',
                        'Conservation of wetlands of international importance',
                        'Climate change',
                        'Marine pollution'
                    ],
                    a: 1,
                    s: 'Ramsar Convention (1971, Iran) is an international treaty for conservation and sustainable use of wetlands. India has 75+ Ramsar sites including Chilika Lake, Keoladeo, Loktak Lake, and Sambhar Lake.'
                }
            ]
        }
    ]
};
const zoologyChapters = [
    animalDiversity,
    humanPhysiology,
    humanReproduction,
    ecology
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/neet-practice/physics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "physicsChapters",
    ()=>physicsChapters
]);
/* ═══════════════════════════════════════════════════
   NEET PHYSICS Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */ /* ──── Chapter 1: Mechanics ──── */ const mechanics = {
    name: 'Mechanics',
    slug: 'mechanics',
    topics: [
        {
            name: 'Laws of Motion & Work-Energy',
            slug: 'laws-motion-energy',
            easy: [
                {
                    q: "Newton's first law of motion is also known as the law of:",
                    o: [
                        'Acceleration',
                        'Inertia',
                        'Action-Reaction',
                        'Gravitation'
                    ],
                    a: 1,
                    s: "Newton's first law states that a body remains at rest or in uniform motion unless acted upon by an external force. This resistance to change in state is called inertia."
                },
                {
                    q: 'SI unit of force is:',
                    o: [
                        'Dyne',
                        'Newton',
                        'Joule',
                        'Watt'
                    ],
                    a: 1,
                    s: 'Force = mass × acceleration. SI unit: 1 Newton = 1 kg⋅m/s². CGS unit: 1 dyne = 1 g⋅cm/s². 1 N = 10⁵ dynes.'
                },
                {
                    q: 'Work done by a force is zero when the angle between force and displacement is:',
                    o: [
                        '0°',
                        '45°',
                        '90°',
                        '180°'
                    ],
                    a: 2,
                    s: 'W = F⋅d⋅cosθ. When θ = 90°, cos 90° = 0, so W = 0. Example: carrying a bag horizontally — the lifting force is vertical while displacement is horizontal.'
                },
                {
                    q: 'The momentum of a body of mass 5 kg moving with velocity 4 m/s is:',
                    o: [
                        '20 kg⋅m/s',
                        '1.25 kg⋅m/s',
                        '9 kg⋅m/s',
                        '0.8 kg⋅m/s'
                    ],
                    a: 0,
                    s: 'Momentum p = mv = 5 × 4 = 20 kg⋅m/s. Momentum is a vector quantity with the same direction as velocity.'
                },
                {
                    q: 'Kinetic energy of a body depends on:',
                    o: [
                        'Mass only',
                        'Velocity only',
                        'Both mass and velocity',
                        'Neither'
                    ],
                    a: 2,
                    s: 'KE = ½mv². Kinetic energy depends on both mass and velocity (squared). Doubling velocity quadruples KE, while doubling mass only doubles KE.'
                }
            ],
            medium: [
                {
                    q: "Newton's third law implies:",
                    o: [
                        'Forces always cancel out',
                        'Action and reaction act on different bodies',
                        'Forces always produce acceleration',
                        'Friction is impossible'
                    ],
                    a: 1,
                    s: "Action and reaction are equal and opposite but act on DIFFERENT bodies. They don't cancel because they are applied to different objects. Example: Earth pulls apple (gravity); apple pulls Earth (reaction)."
                },
                {
                    q: 'A block of mass 2 kg is placed on a frictionless surface. A force of 10 N acts on it. The acceleration is:',
                    o: [
                        '10 m/s²',
                        '5 m/s²',
                        '20 m/s²',
                        '2 m/s²'
                    ],
                    a: 1,
                    s: 'F = ma → a = F/m = 10/2 = 5 m/s². On a frictionless surface, the entire applied force produces acceleration.'
                },
                {
                    q: 'In a perfectly inelastic collision:',
                    o: [
                        'Both KE and momentum are conserved',
                        'Only momentum is conserved; KE is not',
                        'Only KE is conserved',
                        'Neither is conserved'
                    ],
                    a: 1,
                    s: 'In perfectly inelastic collision, objects stick together. Momentum is always conserved (in absence of external forces). KE is not conserved — some is converted to heat, sound, deformation.'
                },
                {
                    q: 'The work-energy theorem states:',
                    o: [
                        'Work done = change in potential energy',
                        'Net work done on a body = change in its kinetic energy',
                        'Work done = force × time',
                        'Energy is always conserved'
                    ],
                    a: 1,
                    s: 'Work-energy theorem: W_net = ΔKE = ½mv² − ½mu². The net work done by all forces on a body equals the change in its kinetic energy.'
                },
                {
                    q: 'A body is thrown vertically upward. At the highest point:',
                    o: [
                        'Both velocity and acceleration are zero',
                        'Velocity is zero but acceleration is g downward',
                        'Velocity is maximum',
                        'Acceleration is zero'
                    ],
                    a: 1,
                    s: 'At the highest point, velocity is momentarily zero (the body stops before falling back), but acceleration due to gravity (g = 9.8 m/s²) always acts downward throughout the motion.'
                },
                {
                    q: 'The coefficient of friction depends on:',
                    o: [
                        'Area of contact',
                        'Nature of surfaces in contact',
                        'Velocity of the body',
                        'Shape of the body'
                    ],
                    a: 1,
                    s: 'Coefficient of friction (μ) depends on the nature and roughness of the two surfaces in contact. It does NOT depend on area of contact, shape, or velocity (for static/kinetic friction).'
                }
            ],
            hard: [
                {
                    q: 'Two blocks of mass m₁ and m₂ (m₁ > m₂) are connected by a string over a massless pulley (Atwood machine). The acceleration is:',
                    o: [
                        '(m₁ − m₂)g/(m₁ + m₂)',
                        '(m₁ + m₂)g/(m₁ − m₂)',
                        'm₁g/m₂',
                        'g'
                    ],
                    a: 0,
                    s: "Atwood machine: Net force = (m₁ − m₂)g, total mass = (m₁ + m₂). By Newton's second law: a = (m₁ − m₂)g/(m₁ + m₂). Tension T = 2m₁m₂g/(m₁ + m₂)."
                },
                {
                    q: 'A particle moves in a circle of radius R with constant speed v. Its centripetal acceleration is:',
                    o: [
                        'v/R',
                        'v²/R',
                        'vR',
                        'v²R'
                    ],
                    a: 1,
                    s: 'Centripetal acceleration a_c = v²/R = ω²R, always directed toward the center of the circular path. The centripetal force F_c = mv²/R provides this acceleration.'
                },
                {
                    q: 'The escape velocity from Earth does NOT depend on:',
                    o: [
                        'Mass of Earth',
                        'Radius of Earth',
                        'Mass of the escaping body',
                        'Gravitational constant G'
                    ],
                    a: 2,
                    s: 'Escape velocity v_e = √(2GM/R). It depends on mass (M) and radius (R) of the planet and G, but NOT on the mass of the escaping body. For Earth, v_e ≈ 11.2 km/s.'
                },
                {
                    q: 'A spring of spring constant k is stretched by x. The potential energy stored is:',
                    o: [
                        'kx',
                        '½kx',
                        'kx²',
                        '½kx²'
                    ],
                    a: 3,
                    s: 'Elastic potential energy U = ½kx². This is derived from work done against the spring force (F = kx): W = ∫₀ˣ kx dx = ½kx². Energy is proportional to the square of displacement.'
                },
                {
                    q: 'The moment of inertia of a solid sphere about its diameter is:',
                    o: [
                        '⅖MR²',
                        '⅔MR²',
                        'MR²',
                        '½MR²'
                    ],
                    a: 0,
                    s: 'Moment of inertia of a solid sphere about a diameter: I = ⅖MR². For a hollow sphere: I = ⅔MR². Moment of inertia depends on mass distribution relative to the axis of rotation.'
                }
            ]
        },
        {
            name: 'Gravitation & Properties of Matter',
            slug: 'gravitation-properties',
            easy: [
                {
                    q: 'The value of acceleration due to gravity (g) on the surface of Earth is approximately:',
                    o: [
                        '8.9 m/s²',
                        '9.8 m/s²',
                        '10.8 m/s²',
                        '6.67 m/s²'
                    ],
                    a: 1,
                    s: 'g ≈ 9.8 m/s² on Earth\'s surface. It is derived from g = GM/R², where M = mass of Earth, R = radius of Earth, G = gravitational constant.'
                },
                {
                    q: 'Surface tension has the SI unit of:',
                    o: [
                        'N/m²',
                        'N/m',
                        'N⋅m',
                        'Pa'
                    ],
                    a: 1,
                    s: 'Surface tension is defined as force per unit length acting on the surface of a liquid. SI unit: N/m. It causes liquids to minimize their surface area (e.g., spherical droplets).'
                },
                {
                    q: "Kepler's third law relates orbital period (T) to:",
                    o: [
                        'Mass of the planet',
                        'Semi-major axis (a) of the orbit: T² ∝ a³',
                        'Eccentricity',
                        'Velocity'
                    ],
                    a: 1,
                    s: "Kepler's third law: T² = (4π²/GM)a³, so T² ∝ a³. The square of the orbital period is proportional to the cube of the semi-major axis of the orbit."
                },
                {
                    q: 'Viscosity is a property of:',
                    o: [
                        'Solids only',
                        'Fluids (liquids and gases)',
                        'Gases only',
                        'Vacuum'
                    ],
                    a: 1,
                    s: "Viscosity is the internal friction of a fluid — its resistance to flow. SI unit: Pa⋅s (or N⋅s/m²). Temperature increases → viscosity of liquids decreases but viscosity of gases increases."
                },
                {
                    q: "Pascal's law states that pressure applied to an enclosed fluid is:",
                    o: [
                        'Absorbed by the fluid',
                        'Transmitted equally in all directions',
                        'Transmitted only downward',
                        'Reduced by the fluid'
                    ],
                    a: 1,
                    s: "Pascal's law: pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and to the walls of the container. Basis of hydraulic machines."
                }
            ],
            medium: [
                {
                    q: 'The gravitational potential energy between two masses m₁ and m₂ separated by distance r is:',
                    o: [
                        'Gm₁m₂/r',
                        '−Gm₁m₂/r',
                        'Gm₁m₂/r²',
                        '−Gm₁m₂/r²'
                    ],
                    a: 1,
                    s: 'Gravitational PE: U = −Gm₁m₂/r. It is negative (bound system) and becomes less negative (increases) as r increases. At r → ∞, U → 0.'
                },
                {
                    q: "The height of a liquid in a capillary tube is given by Jurin's law:",
                    o: [
                        'h = 2Tcosθ/(rρg)',
                        'h = Tr/(ρg)',
                        'h = rρg/(2T)',
                        'h = 2T/(rρg)'
                    ],
                    a: 0,
                    s: "Jurin's law: h = 2Tcosθ/(rρg), where T = surface tension, θ = contact angle, r = tube radius, ρ = liquid density, g = acceleration due to gravity. Smaller radius → higher rise."
                },
                {
                    q: 'A body weighs less at the equator than at the poles because:',
                    o: [
                        'Earth is not perfectly spherical and rotational effect',
                        'Gravity is less at equator',
                        'Moon\'s attraction',
                        'Temperature difference'
                    ],
                    a: 0,
                    s: 'At the equator: (1) Earth\'s radius is larger (oblate spheroid), so g is smaller. (2) Centrifugal effect due to Earth\'s rotation reduces apparent weight. Both effects make bodies weigh less at the equator.'
                },
                {
                    q: "Bernoulli's equation is a statement of conservation of:",
                    o: [
                        'Mass',
                        'Momentum',
                        'Energy (per unit volume) for fluid flow',
                        'Charge'
                    ],
                    a: 2,
                    s: "Bernoulli's equation: P + ½ρv² + ρgh = constant along a streamline. It represents conservation of energy per unit volume for an ideal (incompressible, non-viscous) fluid."
                },
                {
                    q: 'The time period of a satellite orbiting close to Earth\'s surface is approximately:',
                    o: [
                        '24 hours',
                        '84.6 minutes',
                        '12 hours',
                        '30 minutes'
                    ],
                    a: 1,
                    s: 'T = 2π√(R/g) ≈ 2π√(6.4×10⁶/9.8) ≈ 5075 s ≈ 84.6 minutes. This is the minimum orbital period for any satellite around Earth.'
                },
                {
                    q: 'Stokes\' law gives the viscous force on a sphere as:',
                    o: [
                        'F = 6πηrv',
                        'F = 4πηr²v',
                        'F = πηrv',
                        'F = 3πηrv'
                    ],
                    a: 0,
                    s: 'Stokes\' law: F = 6πηrv, where η = viscosity, r = radius of sphere, v = velocity. Valid for small, slow-moving spheres in viscous fluid (low Reynolds number). Used to find terminal velocity.'
                }
            ],
            hard: [
                {
                    q: 'If the radius of Earth were to shrink by 1% (mass unchanged), the value of g at the surface would:',
                    o: [
                        'Decrease by 2%',
                        'Increase by 2%',
                        'Remain the same',
                        'Increase by 1%'
                    ],
                    a: 1,
                    s: 'g = GM/R². If R decreases by 1%: g\' = GM/(0.99R)² = g/(0.99)² ≈ g × 1.0203. So g increases by approximately 2%. (Δg/g = −2ΔR/R).'
                },
                {
                    q: 'The terminal velocity of a sphere falling through a viscous fluid is proportional to:',
                    o: [
                        'r (radius)',
                        'r² (radius squared)',
                        'r³',
                        '1/r'
                    ],
                    a: 1,
                    s: 'At terminal velocity: weight − buoyancy = viscous drag. (4/3)πr³(ρ−σ)g = 6πηrv_t. Solving: v_t = 2r²(ρ−σ)g/(9η). Terminal velocity ∝ r².'
                },
                {
                    q: 'An object is at distance r from the center of Earth (r < R, inside Earth). The gravitational acceleration at that point is:',
                    o: [
                        'GM/r²',
                        'GM/R²',
                        'GMr/R³',
                        'Zero'
                    ],
                    a: 2,
                    s: 'Inside Earth (uniform density), only the mass enclosed within radius r contributes: g\' = GM\'r/R³ = (4/3)πGρr. So g ∝ r inside Earth (linear increase from center to surface).'
                },
                {
                    q: 'For a geostationary orbit, the orbital radius from Earth\'s center is approximately:',
                    o: [
                        '6,400 km',
                        '36,000 km',
                        '42,164 km',
                        '384,400 km'
                    ],
                    a: 2,
                    s: 'Geostationary orbit: T = 24 hours, same angular velocity as Earth. r = (GMT²/4π²)^(1/3) ≈ 42,164 km from Earth\'s center (about 35,786 km above surface). The satellite appears stationary relative to ground.'
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
                    s: 'A soap bubble has two surfaces (inner and outer). Excess pressure = 2(2T/R) = 4T/R for a soap bubble. For a liquid drop (single surface): ΔP = 2T/R.'
                }
            ]
        }
    ]
};
/* ──── Chapter 2: Thermodynamics & Kinetic Theory ──── */ const thermodynamics = {
    name: 'Thermodynamics & Kinetic Theory',
    slug: 'thermodynamics',
    topics: [
        {
            name: 'Laws of Thermodynamics',
            slug: 'laws-thermodynamics',
            easy: [
                {
                    q: 'The first law of thermodynamics is a statement of conservation of:',
                    o: [
                        'Mass',
                        'Energy',
                        'Momentum',
                        'Charge'
                    ],
                    a: 1,
                    s: 'First law: ΔU = Q − W (or Q = ΔU + W). Heat added to a system equals the change in internal energy plus work done by the system. It is the law of conservation of energy for thermodynamic processes.'
                },
                {
                    q: 'In an isothermal process, which quantity remains constant?',
                    o: [
                        'Pressure',
                        'Volume',
                        'Temperature',
                        'Entropy'
                    ],
                    a: 2,
                    s: 'Isothermal = constant temperature. For an ideal gas: PV = nRT = constant, so PV = constant (Boyle\'s law). Internal energy of an ideal gas depends only on T, so ΔU = 0 in isothermal process.'
                },
                {
                    q: 'Heat always flows from:',
                    o: [
                        'Low to high temperature',
                        'High to low temperature (spontaneously)',
                        'In any direction',
                        'Only in contact'
                    ],
                    a: 1,
                    s: 'The second law of thermodynamics (Clausius statement): heat spontaneously flows from a hotter body to a colder body, never the reverse without external work being done.'
                },
                {
                    q: 'Specific heat capacity is defined as heat required to raise:',
                    o: [
                        'Temperature of 1 kg by 1°C',
                        'Temperature of any mass by 10°C',
                        'Temperature of 1 g by 100°C',
                        'Temperature of 1 mole by 1°C'
                    ],
                    a: 0,
                    s: 'Specific heat capacity (c): heat required to raise the temperature of 1 kg of substance by 1°C (or 1 K). Q = mcΔT. Water has high specific heat: 4186 J/(kg⋅K).'
                },
                {
                    q: 'The SI unit of heat is:',
                    o: [
                        'Calorie',
                        'Kelvin',
                        'Joule',
                        'Watt'
                    ],
                    a: 2,
                    s: 'Heat is a form of energy, so its SI unit is Joule (J). 1 calorie = 4.184 J. Calorie is a non-SI unit still used in nutrition and chemistry.'
                }
            ],
            medium: [
                {
                    q: 'In an adiabatic process:',
                    o: [
                        'Temperature is constant',
                        'No heat exchange with surroundings (Q = 0)',
                        'Pressure is constant',
                        'Volume is constant'
                    ],
                    a: 1,
                    s: 'Adiabatic process: Q = 0 (no heat exchange). First law becomes ΔU = −W. If gas expands adiabatically, it does work at the expense of internal energy, so temperature drops. PVᵞ = constant.'
                },
                {
                    q: 'The efficiency of a Carnot engine operating between temperatures T₁ (hot) and T₂ (cold) is:',
                    o: [
                        '1 − T₂/T₁',
                        'T₂/T₁',
                        '1 − T₁/T₂',
                        'T₁/T₂'
                    ],
                    a: 0,
                    s: 'Carnot efficiency η = 1 − T₂/T₁ (temperatures in Kelvin). It is the maximum possible efficiency for any heat engine between these temperatures. η = 100% only if T₂ = 0 K (impossible).'
                },
                {
                    q: 'The work done by an ideal gas during free expansion is:',
                    o: [
                        'Positive',
                        'Negative',
                        'Zero',
                        'Depends on temperature'
                    ],
                    a: 2,
                    s: 'Free expansion: gas expands into vacuum. No external pressure (P_ext = 0), so W = ∫P_ext dV = 0. For an ideal gas, internal energy depends only on T, so ΔU = 0 and Q = 0 (adiabatic). T remains constant.'
                },
                {
                    q: 'The ratio Cₚ/Cᵥ = γ for a monoatomic ideal gas is:',
                    o: [
                        '1.4',
                        '1.67',
                        '1.33',
                        '1.29'
                    ],
                    a: 1,
                    s: 'For monoatomic gas (3 degrees of freedom): Cᵥ = (3/2)R, Cₚ = (5/2)R. γ = Cₚ/Cᵥ = 5/3 ≈ 1.67. For diatomic (5 DOF): γ = 7/5 = 1.4.'
                },
                {
                    q: 'Entropy of a system increases during:',
                    o: [
                        'Freezing',
                        'Irreversible processes',
                        'Isothermal compression',
                        'Crystallization'
                    ],
                    a: 1,
                    s: 'The second law: entropy of an isolated system always increases for irreversible (real) processes. ΔS_universe > 0 for all spontaneous processes. For reversible processes, ΔS_universe = 0.'
                },
                {
                    q: 'In a cyclic process, the change in internal energy is:',
                    o: [
                        'Positive',
                        'Negative',
                        'Zero',
                        'Equal to work done'
                    ],
                    a: 2,
                    s: 'Internal energy is a state function. In a cyclic process, the system returns to its initial state, so ΔU = 0. From first law: Q = W (net heat absorbed = net work done) in a complete cycle.'
                }
            ],
            hard: [
                {
                    q: 'The mean free path of gas molecules depends on:',
                    o: [
                        'Temperature only',
                        'Molecular diameter and number density',
                        'Pressure only',
                        'Mass of molecules only'
                    ],
                    a: 1,
                    s: 'Mean free path λ = 1/(√2 π d² n), where d = molecular diameter, n = number density. Higher density or larger molecules → shorter mean free path. Also λ = kT/(√2 π d² P).'
                },
                {
                    q: 'The Clausius inequality states:',
                    o: [
                        '∮dQ/T ≤ 0 for all cyclic processes',
                        '∮dQ/T > 0 always',
                        'ΔS = 0 for all processes',
                        'Q = W always'
                    ],
                    a: 0,
                    s: 'Clausius inequality: ∮(δQ/T) ≤ 0. Equality holds for reversible cyclic processes. For irreversible processes, the integral is negative. This is a mathematical statement of the second law.'
                },
                {
                    q: 'The Maxwell speed distribution shows that at higher temperatures:',
                    o: [
                        'The peak shifts to lower speeds',
                        'The peak shifts to higher speeds and distribution broadens',
                        'Distribution becomes narrower',
                        'All molecules have the same speed'
                    ],
                    a: 1,
                    s: 'At higher temperatures, the Maxwell-Boltzmann distribution peak shifts to higher speeds (v_mp = √(2kT/m) increases) and the curve broadens (wider range of speeds). The peak height decreases.'
                },
                {
                    q: 'For an ideal gas, the relation between pressure P and kinetic energy per unit volume (E) is:',
                    o: [
                        'P = E',
                        'P = ⅔E',
                        'P = ⅓E',
                        'P = 2E'
                    ],
                    a: 1,
                    s: 'From kinetic theory: P = ⅓ρ<v²> = ⅓(N/V)m<v²>. KE per unit volume E = ½ρ<v²>. Therefore P = ⅔E. Also PV = ⅔(total KE) for an ideal gas.'
                },
                {
                    q: 'The coefficient of performance (COP) of a Carnot refrigerator is:',
                    o: [
                        'T₂/(T₁ − T₂)',
                        'T₁/(T₁ − T₂)',
                        '1 − T₂/T₁',
                        'T₁/T₂'
                    ],
                    a: 0,
                    s: 'COP of Carnot refrigerator = T₂/(T₁ − T₂) = Q₂/W. Higher COP means less work needed for same cooling. COP can be > 1. As T₁ − T₂ → 0, COP → ∞ (easy to cool when temperature difference is small).'
                }
            ]
        },
        {
            name: 'Waves & Oscillations',
            slug: 'waves-oscillations',
            easy: [
                {
                    q: 'The time period of a simple pendulum depends on:',
                    o: [
                        'Mass of the bob',
                        'Length and g',
                        'Amplitude (for small angles)',
                        'Color of the bob'
                    ],
                    a: 1,
                    s: 'T = 2π√(L/g). Time period depends only on length (L) and acceleration due to gravity (g), NOT on mass or amplitude (for small oscillations). Longer pendulum → longer period.'
                },
                {
                    q: 'Sound waves are:',
                    o: [
                        'Transverse waves',
                        'Longitudinal waves',
                        'Electromagnetic waves',
                        'Neither'
                    ],
                    a: 1,
                    s: 'Sound waves are longitudinal mechanical waves — particles vibrate parallel to the direction of wave propagation, creating compressions and rarefactions. They require a medium to travel.'
                },
                {
                    q: 'The speed of sound is maximum in:',
                    o: [
                        'Air',
                        'Water',
                        'Steel (solids)',
                        'Vacuum'
                    ],
                    a: 2,
                    s: 'Speed of sound: solids > liquids > gases (higher density and elasticity in solids). Steel: ~5000 m/s, Water: ~1500 m/s, Air: ~343 m/s (at 20°C). Sound cannot travel through vacuum.'
                },
                {
                    q: 'Frequency is measured in:',
                    o: [
                        'Seconds',
                        'Hertz (Hz)',
                        'Meters',
                        'Decibels'
                    ],
                    a: 1,
                    s: 'Frequency (f) = number of oscillations per second. SI unit: Hertz (Hz) = 1/s. f = 1/T (reciprocal of time period). Human audible range: 20 Hz to 20,000 Hz.'
                },
                {
                    q: 'In simple harmonic motion (SHM), the restoring force is:',
                    o: [
                        'Constant',
                        'Proportional to displacement and directed toward equilibrium',
                        'Zero',
                        'Proportional to velocity'
                    ],
                    a: 1,
                    s: 'In SHM: F = −kx (Hooke\'s law). The restoring force is proportional to displacement (x) from equilibrium and directed opposite to displacement (toward equilibrium position).'
                }
            ],
            medium: [
                {
                    q: 'The Doppler effect causes:',
                    o: [
                        'Change in speed of sound',
                        'Apparent change in frequency when source and observer are in relative motion',
                        'Change in amplitude',
                        'Change in wavelength only'
                    ],
                    a: 1,
                    s: 'Doppler effect: apparent frequency changes when source and/or observer are in relative motion. Approaching → higher frequency (blue shift); receding → lower frequency (red shift). f\' = f(v ± v₀)/(v ∓ vₛ).'
                },
                {
                    q: 'Resonance occurs when:',
                    o: [
                        'Damping is maximum',
                        'Driving frequency equals natural frequency of the system',
                        'Frequency is zero',
                        'Amplitude is minimum'
                    ],
                    a: 1,
                    s: 'Resonance occurs when the driving frequency matches the natural frequency of the oscillating system. At resonance, amplitude becomes maximum (limited by damping). Energy transfer from driver to oscillator is most efficient.'
                },
                {
                    q: 'Standing waves are formed by:',
                    o: [
                        'Single wave traveling in one direction',
                        'Superposition of two waves traveling in opposite directions',
                        'Circular waves',
                        'Only longitudinal waves'
                    ],
                    a: 1,
                    s: 'Standing waves result from superposition of two identical waves traveling in opposite directions. They have nodes (zero amplitude) and antinodes (maximum amplitude). They don\'t transfer energy.'
                },
                {
                    q: 'The fundamental frequency of a string fixed at both ends with length L is:',
                    o: [
                        'v/L',
                        'v/(2L)',
                        '2v/L',
                        'v/(4L)'
                    ],
                    a: 1,
                    s: 'For a string fixed at both ends: fundamental mode has L = λ/2, so λ = 2L. f₁ = v/(2L), where v = √(T/μ) is wave speed. Harmonics: fₙ = nv/(2L), n = 1, 2, 3, ...'
                },
                {
                    q: 'In SHM, the total energy is:',
                    o: [
                        'Only kinetic',
                        'Only potential',
                        'Constant (sum of KE and PE)',
                        'Zero'
                    ],
                    a: 2,
                    s: 'In SHM: E_total = ½kA² = constant. At equilibrium: all KE (½mv²_max). At extremes: all PE (½kA²). KE and PE continuously interchange but total energy remains constant (no damping).'
                },
                {
                    q: 'Beats are produced when two sound waves have:',
                    o: [
                        'Same frequency',
                        'Slightly different frequencies',
                        'Very different frequencies',
                        'Same amplitude'
                    ],
                    a: 1,
                    s: 'Beats occur when two waves of nearly equal frequencies (f₁ and f₂) superpose. Beat frequency = |f₁ − f₂|. The amplitude varies periodically, producing the "wah-wah" effect. Audible when beat frequency < 10 Hz.'
                }
            ],
            hard: [
                {
                    q: 'The quality (timbre) of sound depends on:',
                    o: [
                        'Frequency only',
                        'Amplitude only',
                        'Waveform (number and intensity of harmonics)',
                        'Speed of sound'
                    ],
                    a: 2,
                    s: 'Timbre/quality is determined by the waveform — the combination of fundamental and overtones (harmonics) and their relative intensities. This is why the same note sounds different on different instruments.'
                },
                {
                    q: 'The velocity of a transverse wave on a string is:',
                    o: [
                        '√(T/μ)',
                        '√(μ/T)',
                        'T×μ',
                        'T/μ'
                    ],
                    a: 0,
                    s: 'v = √(T/μ), where T = tension in string, μ = linear mass density (mass per unit length). Higher tension → faster wave. Heavier string → slower wave.'
                },
                {
                    q: 'In a closed organ pipe, the first overtone is the:',
                    o: [
                        'Second harmonic',
                        'Third harmonic',
                        'Fourth harmonic',
                        'Fifth harmonic'
                    ],
                    a: 1,
                    s: 'Closed pipe: only odd harmonics exist. Fundamental = 1st harmonic (f₁ = v/4L). First overtone = 3rd harmonic (3f₁). Second overtone = 5th harmonic (5f₁). Pattern: (2n−1)f₁.'
                },
                {
                    q: 'The energy of a wave is proportional to:',
                    o: [
                        'Amplitude',
                        'Square of amplitude',
                        'Frequency',
                        'Wavelength'
                    ],
                    a: 1,
                    s: 'Energy ∝ A² (amplitude squared). For SHM: E = ½kA². For electromagnetic waves: intensity ∝ E₀². Doubling amplitude quadruples the energy.'
                },
                {
                    q: 'The phase difference between displacement and velocity in SHM is:',
                    o: [
                        '0°',
                        '90° (π/2)',
                        '180° (π)',
                        '270° (3π/2)'
                    ],
                    a: 1,
                    s: 'If x = A sin(ωt), then v = dx/dt = Aω cos(ωt) = Aω sin(ωt + π/2). Velocity leads displacement by π/2 (90°). Acceleration leads displacement by π (180°).'
                }
            ]
        }
    ]
};
/* ──── Chapter 3: Electrostatics & Current Electricity ──── */ const electricity = {
    name: 'Electrostatics & Current Electricity',
    slug: 'electricity',
    topics: [
        {
            name: 'Electrostatics & Capacitance',
            slug: 'electrostatics-capacitance',
            easy: [
                {
                    q: "Coulomb's law gives the force between two charges as:",
                    o: [
                        'F = kq₁q₂/r',
                        'F = kq₁q₂/r²',
                        'F = kq₁q₂r²',
                        'F = kq₁q₂r'
                    ],
                    a: 1,
                    s: "Coulomb's law: F = kq₁q₂/r², where k = 1/(4πε₀) = 9 × 10⁹ N⋅m²/C². The force is directly proportional to the product of charges and inversely proportional to the square of distance."
                },
                {
                    q: 'The SI unit of electric charge is:',
                    o: [
                        'Volt',
                        'Ampere',
                        'Coulomb',
                        'Ohm'
                    ],
                    a: 2,
                    s: 'Electric charge is measured in Coulombs (C). 1 Coulomb = charge transferred by 1 Ampere of current in 1 second. Electron charge = 1.6 × 10⁻¹⁹ C (elementary charge).'
                },
                {
                    q: 'Electric field lines emerge from:',
                    o: [
                        'Negative charges',
                        'Positive charges',
                        'Both charges',
                        'Neutral objects'
                    ],
                    a: 1,
                    s: 'Electric field lines originate from positive charges and terminate on negative charges. They never cross, are perpendicular to conducting surfaces, and their density indicates field strength.'
                },
                {
                    q: 'A capacitor stores:',
                    o: [
                        'Current',
                        'Charge and electrical energy',
                        'Magnetic energy',
                        'Heat'
                    ],
                    a: 1,
                    s: 'A capacitor stores charge (Q = CV) and electrical energy (U = ½CV² = Q²/2C = ½QV). It consists of two conductors separated by a dielectric (insulator).'
                },
                {
                    q: 'The electric potential at a point is defined as:',
                    o: [
                        'Force on a unit charge',
                        'Work done per unit charge in bringing it from infinity',
                        'Current per unit area',
                        'Charge per unit area'
                    ],
                    a: 1,
                    s: 'Electric potential V = W/q = work done per unit positive charge in bringing it from infinity to that point (against the electric field). SI unit: Volt (V) = J/C.'
                }
            ],
            medium: [
                {
                    q: 'The capacitance of a parallel plate capacitor with dielectric constant K is:',
                    o: [
                        'C = ε₀A/d',
                        'C = Kε₀A/d',
                        'C = KA/d',
                        'C = ε₀A/(Kd)'
                    ],
                    a: 1,
                    s: 'C = Kε₀A/d, where K = dielectric constant, ε₀ = permittivity of free space, A = plate area, d = separation. Inserting a dielectric increases capacitance by factor K.'
                },
                {
                    q: "Gauss's law states that the total electric flux through a closed surface is:",
                    o: [
                        'Zero always',
                        'q/ε₀ (charge enclosed divided by ε₀)',
                        'q × ε₀',
                        'E × A'
                    ],
                    a: 1,
                    s: "Gauss's law: Φ = ∮E⋅dA = q_enclosed/ε₀. The net electric flux through any closed surface equals the total enclosed charge divided by ε₀. Very useful for symmetric charge distributions."
                },
                {
                    q: 'Two capacitors C₁ and C₂ in series have equivalent capacitance:',
                    o: [
                        'C₁ + C₂',
                        'C₁C₂/(C₁ + C₂)',
                        'C₁ − C₂',
                        '(C₁ + C₂)/C₁C₂'
                    ],
                    a: 1,
                    s: 'Series: 1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁ + C₂). Charge is same on each. In parallel: C_eq = C₁ + C₂. Voltage is same across each.'
                },
                {
                    q: 'The electric field inside a conductor in electrostatic equilibrium is:',
                    o: [
                        'Maximum',
                        'Equal to the surface field',
                        'Zero',
                        'Proportional to charge'
                    ],
                    a: 2,
                    s: 'Inside a conductor in electrostatic equilibrium, E = 0. All excess charge resides on the surface. The interior is field-free. If there were a field inside, charges would move (contradicting equilibrium).'
                },
                {
                    q: 'An equipotential surface is:',
                    o: [
                        'A surface where electric field is constant',
                        'A surface where potential is the same at every point',
                        'A surface where charge is zero',
                        'A flat surface only'
                    ],
                    a: 1,
                    s: 'On an equipotential surface, V is constant at all points. No work is done in moving a charge along it. Electric field lines are always perpendicular to equipotential surfaces.'
                },
                {
                    q: 'Electric dipole moment is defined as:',
                    o: [
                        'p = q/d',
                        'p = q × 2a (charge × separation)',
                        'p = q²a',
                        'p = q/2a'
                    ],
                    a: 1,
                    s: 'Electric dipole moment p = q × 2a, where q = magnitude of each charge, 2a = separation between charges. It is a vector directed from negative to positive charge. SI unit: C⋅m.'
                }
            ],
            hard: [
                {
                    q: 'The energy density in an electric field E is:',
                    o: [
                        '½ε₀E',
                        '½ε₀E²',
                        'ε₀E²',
                        'ε₀E/2'
                    ],
                    a: 1,
                    s: 'Energy per unit volume stored in an electric field: u = ½ε₀E² (in vacuum) or u = ½εE² = ½Kε₀E² (with dielectric). For a parallel plate capacitor: U = ½ε₀E²(Ad).'
                },
                {
                    q: 'The electric field on the axial line of a short dipole at distance r (r >> 2a) is proportional to:',
                    o: [
                        '1/r',
                        '1/r²',
                        '1/r³',
                        '1/r⁴'
                    ],
                    a: 2,
                    s: 'For a short dipole (r >> 2a): E_axial = 2kp/r³, E_equatorial = kp/r³. Both decrease as 1/r³. This is faster than point charge field (1/r²) because the two charges partially cancel.'
                },
                {
                    q: 'A charged conductor has maximum charge density at:',
                    o: [
                        'Flat surfaces',
                        'Points and sharp edges',
                        'The center',
                        'Everywhere equally'
                    ],
                    a: 1,
                    s: 'Charge density (σ) is highest at points, sharp edges, and regions of high curvature on a conductor surface. This is why lightning rods have pointed tips — they facilitate corona discharge.'
                },
                {
                    q: 'The potential energy of a dipole in a uniform electric field E is:',
                    o: [
                        'U = pE',
                        'U = −p⋅E = −pE cosθ',
                        'U = p/E',
                        'U = pE sinθ'
                    ],
                    a: 1,
                    s: 'U = −p⋅E = −pE cosθ, where θ is angle between dipole moment p and field E. Minimum energy (stable): θ = 0° (U = −pE). Maximum energy (unstable): θ = 180° (U = +pE).'
                },
                {
                    q: 'When a dielectric slab of thickness t and dielectric constant K is placed in a capacitor (plate separation d), the capacitance becomes:',
                    o: [
                        'ε₀A/d',
                        'ε₀A/(d − t + t/K)',
                        'ε₀A/(d + t)',
                        'Kε₀A/d'
                    ],
                    a: 1,
                    s: 'C = ε₀A/(d − t + t/K). The dielectric reduces the effective gap. If t = d (completely filled): C = Kε₀A/d. The dielectric partially fills the gap, decreasing the effective separation.'
                }
            ]
        },
        {
            name: 'Current Electricity',
            slug: 'current-electricity',
            easy: [
                {
                    q: "Ohm's law states:",
                    o: [
                        'V = IR',
                        'V = I/R',
                        'V = I²R',
                        'V = R/I'
                    ],
                    a: 0,
                    s: "Ohm's law: V = IR (voltage = current × resistance). It holds for ohmic conductors (metals at constant temperature). R is constant for ohmic materials."
                },
                {
                    q: 'The SI unit of resistance is:',
                    o: [
                        'Ampere',
                        'Volt',
                        'Ohm (Ω)',
                        'Watt'
                    ],
                    a: 2,
                    s: 'Resistance is measured in Ohms (Ω). 1 Ω = 1 V/A. Named after Georg Simon Ohm. Resistance opposes the flow of current.'
                },
                {
                    q: 'Electric power is given by:',
                    o: [
                        'P = V/I',
                        'P = VI',
                        'P = V/R',
                        'P = IR'
                    ],
                    a: 1,
                    s: 'P = VI = I²R = V²/R. Power is the rate of electrical energy consumption. SI unit: Watt (W). 1 kWh (kilowatt-hour) = 3.6 × 10⁶ J.'
                },
                {
                    q: 'In a series circuit, the current through each component is:',
                    o: [
                        'Different',
                        'Same',
                        'Zero',
                        'Maximum at the first component'
                    ],
                    a: 1,
                    s: 'In a series circuit, the same current flows through all components (no branching). Voltage divides among components. Total resistance: R_total = R₁ + R₂ + R₃ + ...'
                },
                {
                    q: 'The resistivity of a conductor depends on:',
                    o: [
                        'Length',
                        'Cross-sectional area',
                        'Material and temperature',
                        'Both length and area'
                    ],
                    a: 2,
                    s: 'Resistivity (ρ) is an intrinsic property of the material. R = ρL/A. Resistivity depends on the material and temperature but NOT on the dimensions of the conductor.'
                }
            ],
            medium: [
                {
                    q: "Kirchhoff's junction rule (first law) is based on conservation of:",
                    o: [
                        'Energy',
                        'Charge (current)',
                        'Momentum',
                        'Mass'
                    ],
                    a: 1,
                    s: "Kirchhoff's junction rule: ΣI_in = ΣI_out at any junction. It is based on conservation of charge — charge cannot accumulate or disappear at a junction. Kirchhoff's loop rule is based on conservation of energy."
                },
                {
                    q: 'The internal resistance of a cell causes:',
                    o: [
                        'EMF to increase',
                        'Terminal voltage to be less than EMF when discharging',
                        'Current to increase',
                        'No effect'
                    ],
                    a: 1,
                    s: 'Terminal voltage V = EMF − Ir (when discharging), where r = internal resistance. The voltage drop across internal resistance reduces the available voltage at the terminals.'
                },
                {
                    q: 'A Wheatstone bridge is balanced when:',
                    o: [
                        'All resistances are equal',
                        'P/Q = R/S (ratio of opposite arms are equal)',
                        'Current is maximum',
                        'Galvanometer shows maximum deflection'
                    ],
                    a: 1,
                    s: 'Wheatstone bridge is balanced when P/Q = R/S. At balance, no current flows through the galvanometer (null deflection). This principle is used for precise resistance measurement.'
                },
                {
                    q: 'The drift velocity of electrons in a conductor is typically:',
                    o: [
                        'Close to speed of light',
                        'A few mm/s',
                        'A few km/s',
                        'Zero'
                    ],
                    a: 1,
                    s: 'Drift velocity is very small — typically ~10⁻⁴ m/s (a few mm/s). However, the electric signal travels at nearly the speed of light because the electric field propagates instantly through the conductor.'
                },
                {
                    q: 'When resistors R₁ and R₂ are connected in parallel:',
                    o: [
                        'Voltage across each is different',
                        'Current through each is the same',
                        'Voltage across each is the same',
                        'Total resistance increases'
                    ],
                    a: 2,
                    s: 'In parallel: voltage is the same across each resistor. Current divides. Total resistance: 1/R_eq = 1/R₁ + 1/R₂. R_eq is always less than the smallest individual resistance.'
                },
                {
                    q: 'The temperature coefficient of resistance for metals is:',
                    o: [
                        'Negative',
                        'Positive',
                        'Zero',
                        'Infinite'
                    ],
                    a: 1,
                    s: 'Metals have a positive temperature coefficient — resistance increases with temperature (due to increased lattice vibrations scattering conduction electrons). Semiconductors have negative coefficient (more carriers at higher T).'
                }
            ],
            hard: [
                {
                    q: 'The condition for maximum power transfer from a battery (EMF ε, internal resistance r) to an external load R is:',
                    o: [
                        'R >> r',
                        'R << r',
                        'R = r',
                        'R = 2r'
                    ],
                    a: 2,
                    s: 'Maximum power transfer theorem: maximum power is delivered to external load when R = r (load resistance equals internal resistance). P_max = ε²/(4r). But efficiency at this point is only 50%.'
                },
                {
                    q: 'In a potentiometer, the EMF of a cell is balanced at length l. If the EMF of the driver cell is increased:',
                    o: [
                        'Balanced length increases',
                        'Balanced length decreases',
                        'No change',
                        'Balance is not possible'
                    ],
                    a: 1,
                    s: 'If driver EMF increases, potential gradient (V/L) increases. The unknown EMF is balanced at a shorter length l\' (since ε = (V/L)×l, and V/L increased, l must decrease for same ε).'
                },
                {
                    q: 'The equivalent resistance between two diagonally opposite corners of a cube made of 12 identical resistors (each R) is:',
                    o: [
                        'R',
                        '5R/6',
                        'R/2',
                        '7R/12'
                    ],
                    a: 1,
                    s: 'By symmetry, current distributes equally at each junction. Using Kirchhoff\'s laws and symmetry arguments, R_eq = 5R/6 between diagonally opposite corners of a cube of 12 identical resistors.'
                },
                {
                    q: 'Mobility of charge carriers is defined as:',
                    o: [
                        'Drift velocity per unit electric field (μ = v_d/E)',
                        'Current per unit area',
                        'Charge per unit time',
                        'Resistance per unit length'
                    ],
                    a: 0,
                    s: 'Mobility μ = v_d/E (drift velocity per unit electric field). SI unit: m²/(V⋅s). Higher mobility means charge carriers move faster for a given field. Conductivity σ = neμ.'
                },
                {
                    q: 'The sensitivity of a potentiometer can be increased by:',
                    o: [
                        'Decreasing the length of potentiometer wire',
                        'Increasing the length of potentiometer wire',
                        'Increasing the current',
                        'Using thicker wire'
                    ],
                    a: 1,
                    s: 'Sensitivity increases with wire length (L) because potential gradient (k = V/L) decreases — smaller voltage per unit length allows measurement of smaller EMF differences more precisely.'
                }
            ]
        }
    ]
};
/* ──── Chapter 4: Optics & Modern Physics ──── */ const opticsModern = {
    name: 'Optics & Modern Physics',
    slug: 'optics-modern',
    topics: [
        {
            name: 'Ray Optics & Wave Optics',
            slug: 'optics',
            easy: [
                {
                    q: "Snell's law relates:",
                    o: [
                        'Angle of incidence to angle of reflection',
                        'sin i / sin r = refractive index',
                        'Focal length to radius of curvature',
                        'Magnification to object distance'
                    ],
                    a: 1,
                    s: "Snell's law: n₁ sin i = n₂ sin r, or sin i/sin r = n₂₁ (refractive index of medium 2 w.r.t. medium 1). At the critical angle, r = 90° and total internal reflection occurs."
                },
                {
                    q: 'A convex lens converges light rays to a point called:',
                    o: [
                        'Center of curvature',
                        'Principal focus',
                        'Optical center',
                        'Pole'
                    ],
                    a: 1,
                    s: 'A convex (converging) lens brings parallel rays to a point called the principal focus (F). Focal length (f) is the distance from the optical center to the focus. f is positive for convex lens.'
                },
                {
                    q: 'The phenomenon of splitting white light into constituent colors by a prism is called:',
                    o: [
                        'Reflection',
                        'Diffraction',
                        'Dispersion',
                        'Polarization'
                    ],
                    a: 2,
                    s: 'Dispersion is the splitting of white light into its component colors (VIBGYOR) by a prism. It occurs because refractive index varies with wavelength — violet has highest n, red has lowest.'
                },
                {
                    q: 'Total internal reflection occurs when light travels from:',
                    o: [
                        'Rarer to denser medium',
                        'Denser to rarer medium (angle > critical angle)',
                        'Any medium to vacuum',
                        'Vacuum to any medium'
                    ],
                    a: 1,
                    s: 'Total internal reflection (TIR) occurs when light travels from a denser to rarer medium at an angle greater than the critical angle. All light is reflected, none is refracted. Used in optical fibres and prisms.'
                },
                {
                    q: 'The image formed by a plane mirror is:',
                    o: [
                        'Real and inverted',
                        'Virtual, erect, and laterally inverted',
                        'Real and enlarged',
                        'Virtual and diminished'
                    ],
                    a: 1,
                    s: 'Plane mirror forms a virtual, erect, laterally inverted image of the same size as the object. Image distance = object distance. The image cannot be caught on a screen.'
                }
            ],
            medium: [
                {
                    q: 'The lens maker\'s equation is:',
                    o: [
                        '1/f = (n − 1)[1/R₁ − 1/R₂]',
                        '1/f = n(1/R₁ + 1/R₂)',
                        '1/f = 1/R₁ + 1/R₂',
                        'f = R₁ + R₂'
                    ],
                    a: 0,
                    s: 'Lensmaker\'s equation: 1/f = (n − 1)(1/R₁ − 1/R₂), where n = refractive index, R₁, R₂ = radii of curvature of the two surfaces. It relates focal length to lens geometry and material.'
                },
                {
                    q: "Young's double slit experiment demonstrates:",
                    o: [
                        'Particle nature of light',
                        'Wave nature of light (interference)',
                        'Photoelectric effect',
                        'Compton effect'
                    ],
                    a: 1,
                    s: "Young's double slit experiment (1801) showed interference of light — proving its wave nature. Bright fringes (constructive): path difference = nλ. Dark fringes (destructive): path difference = (2n+1)λ/2."
                },
                {
                    q: 'Power of a lens in diopters is:',
                    o: [
                        'P = f',
                        'P = 1/f (f in meters)',
                        'P = f²',
                        'P = 2f'
                    ],
                    a: 1,
                    s: 'Power P = 1/f (with f in meters). SI unit: diopter (D). Convex lens: positive power. Concave lens: negative power. Used in prescriptions for corrective lenses.'
                },
                {
                    q: 'In single slit diffraction, the angular width of central maximum is:',
                    o: [
                        'λ/a',
                        '2λ/a',
                        'a/λ',
                        'λ/(2a)'
                    ],
                    a: 1,
                    s: 'Central maximum angular width = 2λ/a, where a = slit width, λ = wavelength. First minimum occurs at sin θ = λ/a. The central maximum is twice as wide as other maxima.'
                },
                {
                    q: 'Chromatic aberration in lenses is caused by:',
                    o: [
                        'Spherical shape of lens',
                        'Variation of refractive index with wavelength (dispersion)',
                        'Manufacturing defects',
                        'Temperature changes'
                    ],
                    a: 1,
                    s: 'Chromatic aberration occurs because n varies with λ (dispersion). Violet light focuses closer than red light. Corrected using achromatic doublet (combination of converging and diverging lenses of different materials).'
                },
                {
                    q: 'The resolving power of a microscope can be increased by:',
                    o: [
                        'Increasing wavelength',
                        'Decreasing the numerical aperture',
                        'Decreasing wavelength and increasing aperture',
                        'Using a larger eyepiece'
                    ],
                    a: 2,
                    s: 'Resolving power ∝ 2n sinθ/λ (numerical aperture/wavelength). Decreasing wavelength (UV, electron beams) and increasing NA (oil immersion) improve resolution. Electron microscopes have much higher resolving power.'
                }
            ],
            hard: [
                {
                    q: 'The photoelectric effect demonstrates:',
                    o: [
                        'Wave nature of light',
                        'Particle (quantum) nature of light',
                        'Diffraction of light',
                        'Interference of light'
                    ],
                    a: 1,
                    s: 'Photoelectric effect (Einstein, 1905): light behaves as particles (photons) with energy E = hf. Electrons are ejected when photon energy exceeds the work function: KE_max = hf − φ. Threshold frequency exists.'
                },
                {
                    q: 'de Broglie wavelength of a particle with momentum p is:',
                    o: [
                        'λ = hp',
                        'λ = h/p',
                        'λ = p/h',
                        'λ = h²/p'
                    ],
                    a: 1,
                    s: 'de Broglie (1924): λ = h/p = h/(mv). Matter has wave-like properties. For an electron accelerated through V volts: λ = h/√(2meV) ≈ 1.226/√V nm. Verified by Davisson-Germer experiment.'
                },
                {
                    q: 'In Bohr\'s model, the radius of the nth orbit is proportional to:',
                    o: [
                        'n',
                        'n²',
                        '1/n',
                        '1/n²'
                    ],
                    a: 1,
                    s: 'Bohr model: rₙ = n²a₀/Z, where a₀ = 0.529 Å (Bohr radius). So rₙ ∝ n². Energy: Eₙ = −13.6Z²/n² eV (∝ 1/n²). Velocity: vₙ ∝ 1/n.'
                },
                {
                    q: 'The binding energy per nucleon is maximum for:',
                    o: [
                        'Hydrogen',
                        'Iron-56 (Fe-56)',
                        'Uranium-238',
                        'Helium-4'
                    ],
                    a: 1,
                    s: 'Binding energy per nucleon peaks at Fe-56 (~8.8 MeV/nucleon) — making it the most stable nucleus. Lighter nuclei gain stability by fusion; heavier nuclei gain stability by fission (both move toward Fe-56).'
                },
                {
                    q: 'The half-life of a radioactive substance is the time in which:',
                    o: [
                        'All atoms decay',
                        'Half of the atoms decay',
                        'Activity becomes zero',
                        'Mass doubles'
                    ],
                    a: 1,
                    s: 'Half-life (t₁/₂) = time for half the radioactive nuclei to decay. N = N₀(½)^(t/t₁/₂). t₁/₂ = ln2/λ = 0.693/λ, where λ = decay constant. After n half-lives: N = N₀/2ⁿ.'
                }
            ]
        },
        {
            name: 'Magnetism & Electromagnetic Induction',
            slug: 'magnetism-emi',
            easy: [
                {
                    q: 'A current-carrying conductor in a magnetic field experiences a force given by:',
                    o: [
                        'F = qE',
                        'F = BIL sinθ',
                        'F = kq₁q₂/r²',
                        'F = mg'
                    ],
                    a: 1,
                    s: 'Lorentz force on a current-carrying conductor: F = BIL sinθ, where B = magnetic field, I = current, L = length of conductor, θ = angle between I and B. Maximum when θ = 90°.'
                },
                {
                    q: 'The SI unit of magnetic flux is:',
                    o: [
                        'Tesla',
                        'Weber (Wb)',
                        'Henry',
                        'Gauss'
                    ],
                    a: 1,
                    s: 'Magnetic flux Φ = B⋅A⋅cosθ. SI unit: Weber (Wb) = T⋅m². Tesla (T) is the unit of magnetic field (B). 1 Wb = 1 V⋅s. Gauss is CGS unit (1 T = 10⁴ G).'
                },
                {
                    q: 'A solenoid produces a magnetic field that is:',
                    o: [
                        'Radial',
                        'Uniform inside, similar to a bar magnet outside',
                        'Zero everywhere',
                        'Circular'
                    ],
                    a: 1,
                    s: 'A solenoid produces a nearly uniform magnetic field inside (B = μ₀nI, where n = turns per unit length). Outside, it resembles a bar magnet field. Used in electromagnets.'
                },
                {
                    q: "Faraday's law of electromagnetic induction states that induced EMF is:",
                    o: [
                        'Proportional to magnetic flux',
                        'Equal to the rate of change of magnetic flux',
                        'Always zero',
                        'Proportional to resistance'
                    ],
                    a: 1,
                    s: "Faraday's law: EMF = −dΦ/dt. The induced EMF is proportional to the rate of change of magnetic flux through the circuit. The negative sign indicates Lenz's law (opposes the change)."
                },
                {
                    q: 'An electric motor converts:',
                    o: [
                        'Mechanical to electrical energy',
                        'Electrical to mechanical energy',
                        'Heat to electrical energy',
                        'Chemical to electrical energy'
                    ],
                    a: 1,
                    s: 'An electric motor converts electrical energy to mechanical energy using the force on a current-carrying coil in a magnetic field (F = BIL). A generator does the reverse.'
                }
            ],
            medium: [
                {
                    q: "Lenz's law is based on conservation of:",
                    o: [
                        'Charge',
                        'Mass',
                        'Energy',
                        'Momentum'
                    ],
                    a: 2,
                    s: "Lenz's law: the direction of induced current opposes the change causing it. This ensures energy conservation — work must be done against the opposing force to maintain the change in flux."
                },
                {
                    q: 'The magnetic field at the center of a circular loop carrying current I with radius R is:',
                    o: [
                        'μ₀I/(2R)',
                        'μ₀I/R',
                        'μ₀IR',
                        'μ₀I/(4πR)'
                    ],
                    a: 0,
                    s: 'B at center of a circular loop: B = μ₀I/(2R). For N turns: B = μ₀NI/(2R). The field is perpendicular to the plane of the loop (use right-hand rule for direction).'
                },
                {
                    q: 'Self-inductance of a coil is measured in:',
                    o: [
                        'Farad',
                        'Henry (H)',
                        'Weber',
                        'Tesla'
                    ],
                    a: 1,
                    s: 'Self-inductance (L) is measured in Henry (H). 1 H = 1 Wb/A = 1 V⋅s/A. L = NΦ/I. The induced EMF: ε = −L(dI/dt). For a solenoid: L = μ₀n²Al.'
                },
                {
                    q: 'In an AC circuit with only a pure capacitor:',
                    o: [
                        'Current leads voltage by 90°',
                        'Voltage leads current by 90°',
                        'Current and voltage are in phase',
                        'Current lags voltage by 45°'
                    ],
                    a: 0,
                    s: 'In a pure capacitive circuit: current leads voltage by 90° (π/2). I = C(dV/dt). When V is at zero (changing fastest), I is maximum. Capacitive reactance Xc = 1/(ωC).'
                },
                {
                    q: 'A transformer works on the principle of:',
                    o: [
                        'Self-induction',
                        'Mutual induction',
                        'Coulomb\'s law',
                        'Ohm\'s law'
                    ],
                    a: 1,
                    s: 'Transformer works on mutual induction: changing current in primary coil creates changing flux that induces EMF in secondary coil. V₂/V₁ = N₂/N₁. Step-up: N₂ > N₁. Step-down: N₂ < N₁.'
                },
                {
                    q: 'The resonant frequency of an LC circuit is:',
                    o: [
                        'f = 1/(2π√LC)',
                        'f = 2πLC',
                        'f = LC',
                        'f = 1/LC'
                    ],
                    a: 0,
                    s: 'Resonant frequency: f₀ = 1/(2π√LC) or ω₀ = 1/√LC. At resonance in a series RLC circuit: impedance is minimum (= R), current is maximum, and XL = XC.'
                }
            ],
            hard: [
                {
                    q: 'The displacement current introduced by Maxwell is:',
                    o: [
                        'Actual current flow',
                        'ε₀ times the rate of change of electric flux (ε₀ dΦE/dt)',
                        'Current due to moving charges',
                        'Current in a resistor'
                    ],
                    a: 1,
                    s: 'Maxwell\'s displacement current: Id = ε₀(dΦE/dt). It accounts for the changing electric field between capacitor plates (where no actual charges flow), making Ampere\'s law consistent with charge conservation.'
                },
                {
                    q: 'Eddy currents can be reduced by:',
                    o: [
                        'Increasing conductor thickness',
                        'Using laminated cores',
                        'Increasing magnetic field',
                        'Using solid cores'
                    ],
                    a: 1,
                    s: 'Eddy currents are reduced by laminating the core — thin, insulated sheets of metal increase resistance to circulating currents, reducing energy loss (I²R heating) while maintaining magnetic flux path.'
                },
                {
                    q: 'The quality factor (Q factor) of a series RLC circuit at resonance is:',
                    o: [
                        'R/ωL',
                        'ωL/R = 1/(ωCR)',
                        'ωRC',
                        'L/R'
                    ],
                    a: 1,
                    s: 'Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C). Higher Q means sharper resonance peak (more selective), lower bandwidth, and lower energy dissipation. Q is dimensionless.'
                },
                {
                    q: 'The electromagnetic spectrum in order of increasing frequency is:',
                    o: [
                        'Radio, microwave, IR, visible, UV, X-ray, gamma',
                        'Gamma, X-ray, UV, visible, IR, microwave, radio',
                        'IR, radio, visible, UV, X-ray',
                        'Visible, UV, radio, X-ray, gamma'
                    ],
                    a: 0,
                    s: 'Increasing frequency (decreasing wavelength): Radio < Microwave < Infrared < Visible (ROYGBIV) < Ultraviolet < X-rays < Gamma rays. All travel at speed of light c = 3 × 10⁸ m/s in vacuum.'
                },
                {
                    q: 'Skin effect in AC circuits causes current to flow mainly on the:',
                    o: [
                        'Center of the conductor',
                        'Surface of the conductor',
                        'Equally throughout',
                        'Only through insulation'
                    ],
                    a: 1,
                    s: 'Skin effect: at high AC frequencies, current tends to flow near the surface of a conductor due to electromagnetic induction creating opposing currents in the interior. Effective cross-section decreases, increasing resistance.'
                }
            ]
        }
    ]
};
const physicsChapters = [
    mechanics,
    thermodynamics,
    electricity,
    opticsModern
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/neet-practice/chemistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "neetChemistryChapters",
    ()=>neetChemistryChapters
]);
/* ═══════════════════════════════════════════════════
   NEET CHEMISTRY Practice Questions
   4 chapters, each with 2 topics, each topic with 5 easy / 6 medium / 5 hard
   ═══════════════════════════════════════════════════ */ /* ──── Chapter 1: Physical Chemistry ──── */ const physicalChem = {
    name: 'Physical Chemistry',
    slug: 'physical-chemistry',
    topics: [
        {
            name: 'Atomic Structure & Chemical Bonding',
            slug: 'atomic-structure-bonding',
            easy: [
                {
                    q: 'The maximum number of electrons in an orbital is:',
                    o: [
                        '1',
                        '2',
                        '3',
                        '4'
                    ],
                    a: 1,
                    s: 'Each orbital can hold a maximum of 2 electrons with opposite spins (Pauli exclusion principle). An s subshell has 1 orbital (2e⁻), p has 3 orbitals (6e⁻), d has 5 orbitals (10e⁻).'
                },
                {
                    q: 'The atomic number represents the number of:',
                    o: [
                        'Neutrons',
                        'Protons',
                        'Electrons in outermost shell',
                        'Nucleons'
                    ],
                    a: 1,
                    s: 'Atomic number (Z) = number of protons in the nucleus. In a neutral atom, Z also equals the number of electrons. Mass number (A) = protons + neutrons.'
                },
                {
                    q: 'Ionic bond is formed by:',
                    o: [
                        'Sharing of electrons',
                        'Transfer of electrons',
                        'Sharing of protons',
                        'Transfer of protons'
                    ],
                    a: 1,
                    s: 'Ionic bond is formed by complete transfer of electrons from a metal to a non-metal. The resulting ions (cation and anion) are held together by electrostatic attraction. Example: NaCl.'
                },
                {
                    q: 'The shape of an s-orbital is:',
                    o: [
                        'Dumbbell',
                        'Spherical',
                        'Cloverleaf',
                        'Conical'
                    ],
                    a: 1,
                    s: 'An s-orbital has a spherical shape. The probability of finding an electron is the same in all directions at equal distance from the nucleus. 1s is smallest, 2s is larger, etc.'
                },
                {
                    q: 'Aufbau principle states that electrons fill orbitals in order of:',
                    o: [
                        'Decreasing energy',
                        'Increasing energy',
                        'Increasing size',
                        'Random order'
                    ],
                    a: 1,
                    s: 'Aufbau principle: electrons occupy the lowest energy orbital available before filling higher energy orbitals. The filling order follows (n+l) rule: 1s, 2s, 2p, 3s, 3p, 4s, 3d, ...'
                }
            ],
            medium: [
                {
                    q: 'The quantum numbers for the last electron in sodium (Z=11) are:',
                    o: [
                        'n=3, l=0, ml=0, ms=+½',
                        'n=3, l=1, ml=0, ms=+½',
                        'n=2, l=1, ml=0, ms=−½',
                        'n=3, l=2, ml=0, ms=+½'
                    ],
                    a: 0,
                    s: 'Na: 1s² 2s² 2p⁶ 3s¹. The last electron is in 3s: n=3, l=0 (s subshell), ml=0 (only one s orbital), ms=+½.'
                },
                {
                    q: 'Among LiF, NaF, KF and RbF, which has the highest lattice energy?',
                    o: [
                        'LiF',
                        'NaF',
                        'KF',
                        'RbF'
                    ],
                    a: 0,
                    s: 'Lattice energy ∝ (charge product)/(sum of ionic radii). Li⁺ is the smallest cation, so LiF has the shortest interionic distance and highest lattice energy.'
                },
                {
                    q: 'Hybridization of carbon in ethylene (C₂H₄) is:',
                    o: [
                        'sp',
                        'sp²',
                        'sp³',
                        'sp³d'
                    ],
                    a: 1,
                    s: 'In ethylene, each carbon forms one C=C (double bond) and two C-H bonds. C=C consists of one σ and one π bond. Three σ bonds require sp² hybridization with 120° bond angles (trigonal planar).'
                },
                {
                    q: 'The bond order of O₂ according to MOT is:',
                    o: [
                        '1',
                        '1.5',
                        '2',
                        '3'
                    ],
                    a: 2,
                    s: 'O₂ electronic configuration: σ1s² σ*1s² σ2s² σ*2s² σ2p² π2p⁴ π*2p². Bond order = (10-6)/2 = 2. Two unpaired electrons in π* make O₂ paramagnetic.'
                },
                {
                    q: 'Which molecule has a linear shape?',
                    o: [
                        'H₂O',
                        'CO₂',
                        'NH₃',
                        'SO₂'
                    ],
                    a: 1,
                    s: 'CO₂ has sp hybridization with no lone pairs on carbon. Two bonding pairs arrange linearly (180°). H₂O is bent (104.5°), NH₃ is pyramidal (107°), SO₂ is bent (~119°).'
                },
                {
                    q: 'Dipole moment of a molecule depends on:',
                    o: [
                        'Bond length only',
                        'Charge separation only',
                        'Both bond length and charge separation, and geometry',
                        'Temperature'
                    ],
                    a: 2,
                    s: 'Dipole moment μ = q × d (charge × distance). For polyatomic molecules, the net dipole moment is the vector sum of all bond dipoles, so molecular geometry is crucial (e.g., CO₂ has zero net dipole).'
                }
            ],
            hard: [
                {
                    q: 'The correct order of ionization energies is:',
                    o: [
                        'N > O > F > Ne',
                        'Ne > F > N > O',
                        'Ne > F > O > N',
                        'F > Ne > N > O'
                    ],
                    a: 1,
                    s: 'IE order: Ne > F > N > O. Anomaly: N > O because N has a half-filled 2p³ (extra stable). Removing an electron from stable half-filled configuration requires more energy. Noble gas Ne has highest IE.'
                },
                {
                    q: 'Born-Haber cycle for NaCl involves all EXCEPT:',
                    o: [
                        'Ionization energy of Na',
                        'Electron affinity of Cl',
                        'Lattice energy',
                        'Bond energy of NaCl molecule'
                    ],
                    a: 3,
                    s: 'Born-Haber cycle relates lattice energy to other measurable quantities: sublimation of Na, ionization of Na, dissociation of Cl₂, electron affinity of Cl, and enthalpy of formation. Bond energy of NaCl molecule is not a step.'
                },
                {
                    q: 'The paramagnetic behaviour of O₂ was first explained by:',
                    o: [
                        'Valence Bond Theory',
                        'VSEPR Theory',
                        'Molecular Orbital Theory',
                        'Crystal Field Theory'
                    ],
                    a: 2,
                    s: 'VBT predicts O₂ to be diamagnetic (all electrons paired), which is wrong. MOT correctly shows O₂ has 2 unpaired electrons in π*2p orbitals, explaining its paramagnetism.'
                },
                {
                    q: 'In which of the following does the central atom have two lone pairs?',
                    o: [
                        'NH₃',
                        'H₂O',
                        'BF₃',
                        'CH₄'
                    ],
                    a: 1,
                    s: 'H₂O: O has 6 valence electrons. Two bond pairs (with H) + two lone pairs = 4 electron pairs (sp³). The two lone pairs give bent shape with 104.5° angle. NH₃ has one lone pair, BF₃ and CH₄ have none.'
                },
                {
                    q: 'Fajan\'s rules predict more covalent character when:',
                    o: [
                        'Cation is large and anion is small',
                        'Cation is small with high charge and anion is large',
                        'Both ions are large',
                        'Both ions have low charges'
                    ],
                    a: 1,
                    s: 'Fajan\'s rules: covalent character increases with (1) small, highly charged cation (high polarizing power), (2) large, highly charged anion (high polarizability), (3) cation with pseudo-noble-gas configuration.'
                }
            ]
        },
        {
            name: 'Chemical Equilibrium & Thermodynamics',
            slug: 'equilibrium-thermo',
            easy: [
                {
                    q: 'At equilibrium, the rate of forward reaction is:',
                    o: [
                        'Greater than reverse',
                        'Less than reverse',
                        'Equal to reverse',
                        'Zero'
                    ],
                    a: 2,
                    s: 'At chemical equilibrium, rate of forward reaction = rate of backward reaction. Concentrations remain constant but reactions continue to occur (dynamic equilibrium).'
                },
                {
                    q: 'The first law of thermodynamics is a statement of:',
                    o: [
                        'Conservation of mass',
                        'Conservation of energy',
                        'Entropy increase',
                        'Spontaneity'
                    ],
                    a: 1,
                    s: 'First law: ΔU = Q − W. Energy can neither be created nor destroyed, only converted from one form to another. It is the law of conservation of energy.'
                },
                {
                    q: 'An exothermic reaction has:',
                    o: [
                        'ΔH > 0',
                        'ΔH < 0',
                        'ΔH = 0',
                        'ΔS < 0'
                    ],
                    a: 1,
                    s: 'Exothermic reactions release heat to surroundings. ΔH < 0 (negative enthalpy change). Examples: combustion, neutralization, dissolving NaOH in water.'
                },
                {
                    q: 'Le Chatelier\'s principle applies to:',
                    o: [
                        'Only gaseous reactions',
                        'Systems at equilibrium',
                        'Irreversible reactions',
                        'All chemical reactions'
                    ],
                    a: 1,
                    s: 'Le Chatelier\'s principle: If a system at equilibrium is disturbed, it shifts to counteract the disturbance and re-establish equilibrium. Applies only to systems already at equilibrium.'
                },
                {
                    q: 'The pH of pure water at 25°C is:',
                    o: [
                        '0',
                        '1',
                        '7',
                        '14'
                    ],
                    a: 2,
                    s: 'Pure water: [H⁺] = [OH⁻] = 10⁻⁷ M. pH = −log[H⁺] = −log(10⁻⁷) = 7. Pure water is neutral. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.'
                }
            ],
            medium: [
                {
                    q: 'For the reaction 2SO₂ + O₂ ⇌ 2SO₃, increasing pressure will:',
                    o: [
                        'Shift equilibrium to the left',
                        'Shift equilibrium to the right',
                        'Have no effect',
                        'Decrease Kp'
                    ],
                    a: 1,
                    s: 'Δn(g) = 2 − (2+1) = −1 (fewer moles of gas on product side). Increasing pressure shifts equilibrium toward fewer moles of gas → toward products (right). Kp doesn\'t change.'
                },
                {
                    q: 'The entropy of a perfect crystal at absolute zero is:',
                    o: [
                        'Maximum',
                        'Zero',
                        'Undefined',
                        'Negative'
                    ],
                    a: 1,
                    s: 'Third law of thermodynamics: The entropy of a perfect crystal at absolute zero (0 K) is exactly zero. At 0 K, there is only one possible microstate (W=1), so S = kB ln(1) = 0.'
                },
                {
                    q: 'Gibbs free energy change (ΔG) for a spontaneous process at constant T and P is:',
                    o: [
                        'ΔG > 0',
                        'ΔG < 0',
                        'ΔG = 0',
                        'Cannot be determined'
                    ],
                    a: 1,
                    s: 'A process is spontaneous at constant T and P when ΔG < 0. ΔG = ΔH − TΔS. At equilibrium, ΔG = 0. Non-spontaneous when ΔG > 0.'
                },
                {
                    q: 'The pH of a 0.01 M NaOH solution is:',
                    o: [
                        '2',
                        '10',
                        '12',
                        '14'
                    ],
                    a: 2,
                    s: 'NaOH is a strong base: [OH⁻] = 0.01 = 10⁻² M. pOH = −log(10⁻²) = 2. pH = 14 − pOH = 14 − 2 = 12.'
                },
                {
                    q: 'Hess\'s law states that enthalpy change of a reaction:',
                    o: [
                        'Depends on the path',
                        'Is independent of the path',
                        'Is always negative',
                        'Equals zero in a cycle'
                    ],
                    a: 1,
                    s: 'Hess\'s law: The total enthalpy change is the same regardless of the path taken (whether in one step or multiple steps). Enthalpy is a state function.'
                },
                {
                    q: 'The relationship between ΔG° and equilibrium constant K is:',
                    o: [
                        'ΔG° = RT ln K',
                        'ΔG° = −RT ln K',
                        'ΔG° = −nFE°',
                        'Both B and C'
                    ],
                    a: 3,
                    s: 'ΔG° = −RT ln K = −nFE° (for electrochemical cells). When K > 1, ΔG° < 0 (spontaneous at standard conditions). When K < 1, ΔG° > 0.'
                }
            ],
            hard: [
                {
                    q: 'For a buffer solution containing 0.1 M CH₃COOH and 0.1 M CH₃COONa (Ka = 1.8×10⁻⁵), the pH is:',
                    o: [
                        '4.74',
                        '5.74',
                        '3.74',
                        '9.26'
                    ],
                    a: 0,
                    s: 'Henderson-Hasselbalch: pH = pKa + log([salt]/[acid]) = −log(1.8×10⁻⁵) + log(0.1/0.1) = 4.74 + 0 = 4.74.'
                },
                {
                    q: 'Entropy change for an isothermal reversible expansion of an ideal gas is:',
                    o: [
                        'Zero',
                        'nR ln(V₂/V₁)',
                        'nCv ln(T₂/T₁)',
                        'Negative'
                    ],
                    a: 1,
                    s: 'For isothermal reversible process: ΔS = Q_rev/T = nRT ln(V₂/V₁)/T = nR ln(V₂/V₁). Since V₂ > V₁ in expansion, ΔS > 0 (entropy increases).'
                },
                {
                    q: 'The solubility product (Ksp) of AgCl is 1.8×10⁻¹⁰. Its solubility in 0.1 M NaCl is:',
                    o: [
                        '1.8×10⁻⁹ M',
                        '1.34×10⁻⁵ M',
                        '1.8×10⁻¹⁰ M',
                        '1.8×10⁻⁵ M'
                    ],
                    a: 0,
                    s: 'AgCl ⇌ Ag⁺ + Cl⁻. In 0.1 M NaCl, [Cl⁻] ≈ 0.1 M (common ion). Ksp = [Ag⁺][Cl⁻] → [Ag⁺] = Ksp/[Cl⁻] = 1.8×10⁻¹⁰/0.1 = 1.8×10⁻⁹ M. Solubility decreases dramatically.'
                },
                {
                    q: 'For a reaction with ΔH = −40 kJ/mol and ΔS = −100 J/(mol·K), the reaction becomes non-spontaneous above:',
                    o: [
                        '100 K',
                        '200 K',
                        '300 K',
                        '400 K'
                    ],
                    a: 3,
                    s: 'ΔG = ΔH − TΔS = 0 at the crossover temperature. T = ΔH/ΔS = −40000/(−100) = 400 K. Above 400 K, the −TΔS term dominates and ΔG becomes positive (non-spontaneous).'
                },
                {
                    q: 'The van\'t Hoff equation relating K to temperature is:',
                    o: [
                        'd(ln K)/dT = ΔH°/(RT²)',
                        'ln K = −ΔG°/RT',
                        'd(ln K)/dP = ΔV/RT',
                        'K = e^(−Ea/RT)'
                    ],
                    a: 0,
                    s: 'Van\'t Hoff equation: d(ln K)/dT = ΔH°/(RT²). For exothermic reactions (ΔH° < 0), K decreases with increasing T. For endothermic (ΔH° > 0), K increases with T.'
                }
            ]
        }
    ]
};
/* ──── Chapter 2: Organic Chemistry ──── */ const organicChem = {
    name: 'Organic Chemistry',
    slug: 'organic-chemistry',
    topics: [
        {
            name: 'General Organic Chemistry & Hydrocarbons',
            slug: 'goc-hydrocarbons',
            easy: [
                {
                    q: 'The IUPAC name of CH₃CH₂OH is:',
                    o: [
                        'Methanol',
                        'Ethanol',
                        'Propanol',
                        'Butanol'
                    ],
                    a: 1,
                    s: 'CH₃CH₂OH has a 2-carbon chain with an -OH group. IUPAC name: Ethanol (eth- for 2C, -ol for alcohol). Common name: ethyl alcohol.'
                },
                {
                    q: 'Isomers have the same:',
                    o: [
                        'Structural formula',
                        'Molecular formula',
                        'Physical properties',
                        'Chemical properties'
                    ],
                    a: 1,
                    s: 'Isomers are compounds with the same molecular formula but different structural arrangements. They can have different physical and chemical properties. Example: C₂H₆O can be ethanol or dimethyl ether.'
                },
                {
                    q: 'The general formula of alkanes is:',
                    o: [
                        'CₙH₂ₙ',
                        'CₙH₂ₙ₊₂',
                        'CₙH₂ₙ₋₂',
                        'CₙHₙ'
                    ],
                    a: 1,
                    s: 'Alkanes are saturated hydrocarbons with single bonds only. General formula: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ. Alkynes: CₙH₂ₙ₋₂.'
                },
                {
                    q: 'Homologous series members differ by:',
                    o: [
                        'CH₂',
                        'CH₃',
                        'C₂H₂',
                        'CH'
                    ],
                    a: 0,
                    s: 'Members of a homologous series differ by -CH₂- (14 amu). They have the same general formula, functional group, and similar chemical properties. Example: CH₄, C₂H₆, C₃H₈ (alkanes).'
                },
                {
                    q: '+I (positive inductive) effect is shown by:',
                    o: [
                        '-NO₂',
                        '-Cl',
                        '-CH₃',
                        '-COOH'
                    ],
                    a: 2,
                    s: 'Alkyl groups like -CH₃ show +I effect (electron donating). They push electron density through σ bonds. Groups like -NO₂, -Cl, -COOH show −I effect (electron withdrawing).'
                }
            ],
            medium: [
                {
                    q: 'The most stable carbocation among the following is:',
                    o: [
                        'CH₃⁺',
                        '(CH₃)₂CH⁺',
                        '(CH₃)₃C⁺',
                        'C₂H₅⁺'
                    ],
                    a: 2,
                    s: 'Carbocation stability: 3° > 2° > 1° > methyl. (CH₃)₃C⁺ is tertiary, stabilized by hyperconjugation and +I effect of three methyl groups.'
                },
                {
                    q: 'Markovnikov\'s rule predicts that in HBr addition to propene, the major product is:',
                    o: [
                        '1-Bromopropane',
                        '2-Bromopropane',
                        'Both equally',
                        '1,2-Dibromopropane'
                    ],
                    a: 1,
                    s: 'Markovnikov\'s rule: H adds to C with more H atoms (less substituted). In propene + HBr: H goes to CH₂, Br goes to CH (middle carbon) → 2-bromopropane (via more stable 2° carbocation).'
                },
                {
                    q: 'Benzene undergoes electrophilic substitution rather than addition because:',
                    o: [
                        'C-C bonds are very strong',
                        'Aromatic stabilization is preserved',
                        'It has no double bonds',
                        'It has sp³ carbons'
                    ],
                    a: 1,
                    s: 'Benzene\'s aromatic stabilization energy (~36 kcal/mol) makes substitution preferred over addition. Addition would destroy aromaticity (delocalized π system), which is energetically unfavorable.'
                },
                {
                    q: 'Anti-Markovnikov addition of HBr to propene gives:',
                    o: [
                        '2-Bromopropane',
                        '1-Bromopropane',
                        'Propane',
                        '1,2-Dibromopropane'
                    ],
                    a: 1,
                    s: 'Anti-Markovnikov (peroxide effect/Kharasch effect): In presence of peroxides, HBr adds via free radical mechanism. Br adds to less substituted carbon → 1-bromopropane.'
                },
                {
                    q: 'Ozonolysis of 2-butene gives:',
                    o: [
                        'Formaldehyde only',
                        'Acetaldehyde (2 molecules)',
                        'Acetone + formaldehyde',
                        'Butanal'
                    ],
                    a: 1,
                    s: 'CH₃CH=CHCH₃ + O₃ → ozonide → 2CH₃CHO (2 molecules of acetaldehyde) on reductive workup (Zn/H₂O). Each doubly-bonded carbon becomes a carbonyl group.'
                },
                {
                    q: 'The correct order of acidic strength is:',
                    o: [
                        'Ethane > Ethene > Ethyne',
                        'Ethyne > Ethene > Ethane',
                        'Ethene > Ethyne > Ethane',
                        'All have equal acidity'
                    ],
                    a: 1,
                    s: 'Acidity: sp > sp² > sp³ C-H. Ethyne (sp, 50% s) > Ethene (sp², 33% s) > Ethane (sp³, 25% s). More s-character → electrons held closer to nucleus → more acidic.'
                }
            ],
            hard: [
                {
                    q: 'Friedel-Crafts alkylation of benzene with CH₃Cl/AlCl₃ gives:',
                    o: [
                        'Chlorobenzene',
                        'Toluene',
                        'Benzoic acid',
                        'Aniline'
                    ],
                    a: 1,
                    s: 'Friedel-Crafts alkylation: C₆H₆ + CH₃Cl → C₆H₅CH₃ (toluene) + HCl. AlCl₃ generates CH₃⁺ electrophile. Limitation: doesn\'t work with deactivated rings or NH₂ groups.'
                },
                {
                    q: 'Which of the following shows geometrical isomerism?',
                    o: [
                        '1-Butene',
                        '2-Butene',
                        '2-Methylpropene',
                        'Propene'
                    ],
                    a: 1,
                    s: '2-Butene (CH₃CH=CHCH₃) shows cis-trans (geometrical) isomerism because both doubly-bonded carbons have different substituents. cis-2-Butene and trans-2-Butene exist. 1-Butene has two H on one C.'
                },
                {
                    q: 'In electrophilic aromatic substitution, -OCH₃ group is:',
                    o: [
                        'Deactivating and meta-directing',
                        'Activating and ortho-para directing',
                        'Activating and meta-directing',
                        'Deactivating and ortho-para directing'
                    ],
                    a: 1,
                    s: '-OCH₃ is activating (+M effect donates electron density to ring via lone pair resonance, outweighing weak −I effect). It directs incoming electrophile to ortho and para positions.'
                },
                {
                    q: 'The number of structural isomers of C₄H₁₀ is:',
                    o: [
                        '1',
                        '2',
                        '3',
                        '4'
                    ],
                    a: 1,
                    s: 'C₄H₁₀ has 2 structural isomers: n-butane (CH₃CH₂CH₂CH₃) and isobutane/2-methylpropane ((CH₃)₃CH). These are chain isomers.'
                },
                {
                    q: 'Lindlar\'s catalyst converts alkynes to:',
                    o: [
                        'Alkanes',
                        'trans-Alkenes',
                        'cis-Alkenes',
                        'Alcohols'
                    ],
                    a: 2,
                    s: 'Lindlar\'s catalyst (Pd/CaCO₃ with quinoline/Pb poison) is a partially deactivated catalyst that reduces alkynes to cis-alkenes (syn addition of H₂). Full reduction to alkane is prevented.'
                }
            ]
        },
        {
            name: 'Biomolecules & Polymers',
            slug: 'biomolecules-polymers',
            easy: [
                {
                    q: 'Glucose has the molecular formula:',
                    o: [
                        'C₅H₁₀O₅',
                        'C₆H₁₂O₆',
                        'C₁₂H₂₂O₁₁',
                        'C₆H₁₀O₅'
                    ],
                    a: 1,
                    s: 'Glucose (C₆H₁₂O₆) is a monosaccharide (aldohexose). It is the most common sugar and primary energy source for cells. Fructose has the same formula (isomer) but is a ketohexose.'
                },
                {
                    q: 'Proteins are polymers of:',
                    o: [
                        'Nucleotides',
                        'Amino acids',
                        'Fatty acids',
                        'Monosaccharides'
                    ],
                    a: 1,
                    s: 'Proteins are polypeptides — polymers of amino acids linked by peptide bonds (CO-NH). There are 20 standard amino acids. The sequence of amino acids determines protein structure and function.'
                },
                {
                    q: 'The monomer of natural rubber is:',
                    o: [
                        'Ethylene',
                        'Styrene',
                        'Isoprene',
                        'Chloroprene'
                    ],
                    a: 2,
                    s: 'Natural rubber is cis-1,4-polyisoprene. Isoprene = 2-methyl-1,3-butadiene (CH₂=C(CH₃)-CH=CH₂). Vulcanization (cross-linking with sulfur) improves its properties.'
                },
                {
                    q: 'DNA contains which sugar?',
                    o: [
                        'Ribose',
                        'Deoxyribose',
                        'Glucose',
                        'Fructose'
                    ],
                    a: 1,
                    s: 'DNA (deoxyribonucleic acid) contains 2-deoxyribose sugar (lacking -OH at C2). RNA contains ribose sugar. This difference affects stability — DNA is more stable than RNA.'
                },
                {
                    q: 'Starch is a polymer of:',
                    o: [
                        'Fructose',
                        'Glucose',
                        'Galactose',
                        'Mannose'
                    ],
                    a: 1,
                    s: 'Starch is a polysaccharide made of glucose monomers. It has two components: amylose (linear, α-1,4 linkages) and amylopectin (branched, α-1,4 and α-1,6 linkages).'
                }
            ],
            medium: [
                {
                    q: 'Nylon-6,6 is a product of:',
                    o: [
                        'Addition polymerization',
                        'Condensation polymerization of adipic acid and hexamethylenediamine',
                        'Ring-opening polymerization',
                        'Copolymerization of ethylene and propylene'
                    ],
                    a: 1,
                    s: 'Nylon-6,6 is formed by condensation of adipic acid (6C dicarboxylic acid) and hexamethylenediamine (6C diamine). "6,6" indicates 6 carbons in each monomer. Water is eliminated.'
                },
                {
                    q: 'The secondary structure of proteins refers to:',
                    o: [
                        'Sequence of amino acids',
                        'α-helix and β-pleated sheet',
                        'Overall 3D shape',
                        'Assembly of subunits'
                    ],
                    a: 1,
                    s: 'Secondary structure: local folding stabilized by hydrogen bonds between backbone C=O and N-H groups. α-helix (right-handed coil) and β-sheet (zigzag, parallel/antiparallel strands) are the two types.'
                },
                {
                    q: 'Sucrose on hydrolysis gives:',
                    o: [
                        'Two glucose molecules',
                        'Glucose and galactose',
                        'Glucose and fructose',
                        'Two fructose molecules'
                    ],
                    a: 2,
                    s: 'Sucrose (table sugar) is a disaccharide that hydrolyzes into glucose + fructose. The mixture is called "invert sugar" because the optical rotation changes sign upon hydrolysis.'
                },
                {
                    q: 'Which of the following is a thermosetting polymer?',
                    o: [
                        'Polythene',
                        'PVC',
                        'Bakelite',
                        'Nylon'
                    ],
                    a: 2,
                    s: 'Bakelite (phenol-formaldehyde resin) is thermosetting — once set/hardened, it cannot be resoftened by heating due to extensive cross-linking. Polythene, PVC, and Nylon are thermoplastic.'
                },
                {
                    q: 'Essential amino acids are those that:',
                    o: [
                        'Body can synthesize',
                        'Must be obtained from diet',
                        'Are non-polar',
                        'Contain sulfur'
                    ],
                    a: 1,
                    s: 'Essential amino acids cannot be synthesized by the body and must be obtained through diet. There are ~9 essential amino acids for humans including leucine, isoleucine, valine, tryptophan, etc.'
                },
                {
                    q: 'Zwitter ion form of an amino acid exists at:',
                    o: [
                        'Acidic pH',
                        'Isoelectric pH',
                        'Basic pH',
                        'Very low pH'
                    ],
                    a: 1,
                    s: 'At isoelectric pH (pI), amino acid exists as zwitter ion (H₃N⁺-CHR-COO⁻) with zero net charge. Below pI: cationic form. Above pI: anionic form.'
                }
            ],
            hard: [
                {
                    q: 'The peptide bond in proteins is:',
                    o: [
                        'C-C bond',
                        'C-N bond with partial double bond character',
                        'N-H bond',
                        'C-O bond'
                    ],
                    a: 1,
                    s: 'The peptide bond (CO-NH) has partial double bond character due to resonance between C=O and C-N. This makes it planar and rigid. The six atoms around the peptide bond are coplanar.'
                },
                {
                    q: 'Enzymes are:',
                    o: [
                        'Mineral catalysts',
                        'Protein biocatalysts',
                        'Lipid molecules',
                        'Nucleic acids'
                    ],
                    a: 1,
                    s: 'Enzymes are biological catalysts, mostly proteins (some RNA enzymes called ribozymes exist). They have high specificity (lock-and-key/induced fit model) and work optimally at specific pH and temperature.'
                },
                {
                    q: 'Which of the following is a reducing sugar?',
                    o: [
                        'Sucrose',
                        'Maltose',
                        'Starch',
                        'Cellulose'
                    ],
                    a: 1,
                    s: 'Maltose is a reducing sugar because it has a free anomeric carbon (hemiacetal) that can open and show reducing properties. Sucrose is a non-reducing sugar (both anomeric carbons involved in glycosidic bond).'
                },
                {
                    q: 'Denaturation of proteins involves:',
                    o: [
                        'Breaking of peptide bonds',
                        'Loss of primary structure',
                        'Disruption of secondary and tertiary structures',
                        'Hydrolysis to amino acids'
                    ],
                    a: 2,
                    s: 'Denaturation disrupts the secondary (H-bonds), tertiary (hydrophobic, ionic, disulfide interactions), and quaternary structures while preserving the primary sequence (peptide bonds intact). Caused by heat, pH change, organic solvents.'
                },
                {
                    q: 'Biodegradable polymers include:',
                    o: [
                        'Polythene',
                        'PVC',
                        'PHBV (Poly-β-hydroxybutyrate-co-β-hydroxyvalerate)',
                        'Teflon'
                    ],
                    a: 2,
                    s: 'PHBV is a biodegradable polyester produced by bacteria. It degrades naturally in the environment. Other biodegradable polymers: PLA (polylactic acid), Nylon-2-Nylon-6. Polythene, PVC, Teflon are non-biodegradable.'
                }
            ]
        }
    ]
};
/* ──── Chapter 3: Inorganic Chemistry ──── */ const inorganicChem = {
    name: 'Inorganic Chemistry',
    slug: 'inorganic-chemistry',
    topics: [
        {
            name: 'Periodic Table & Chemical Trends',
            slug: 'periodic-trends',
            easy: [
                {
                    q: 'Elements in the same group of the periodic table have the same number of:',
                    o: [
                        'Protons',
                        'Neutrons',
                        'Valence electrons',
                        'Total electrons'
                    ],
                    a: 2,
                    s: 'Elements in the same group have the same number of valence electrons, giving them similar chemical properties. Group 1: 1 valence electron, Group 17: 7 valence electrons.'
                },
                {
                    q: 'The most electronegative element is:',
                    o: [
                        'Oxygen',
                        'Fluorine',
                        'Chlorine',
                        'Nitrogen'
                    ],
                    a: 1,
                    s: 'Fluorine (4.0 on Pauling scale) is the most electronegative element. Electronegativity generally increases left to right across a period and decreases down a group.'
                },
                {
                    q: 'Alkali metals belong to group:',
                    o: [
                        '1',
                        '2',
                        '13',
                        '17'
                    ],
                    a: 0,
                    s: 'Alkali metals (Li, Na, K, Rb, Cs, Fr) belong to Group 1. They have 1 valence electron (ns¹), are highly reactive, and form +1 ions readily.'
                },
                {
                    q: 'Noble gases are chemically inert because:',
                    o: [
                        'They are very light',
                        'They have completely filled valence shells',
                        'They are radioactive',
                        'They have no electrons'
                    ],
                    a: 1,
                    s: 'Noble gases (He, Ne, Ar, Kr, Xe, Rn) have completely filled outer electron shells (ns²np⁶, except He: 1s²). This stable configuration makes them very unreactive.'
                },
                {
                    q: 'Atomic radius generally decreases across a period because:',
                    o: [
                        'More shells are added',
                        'Nuclear charge increases with same number of shells',
                        'Electrons are removed',
                        'Mass increases'
                    ],
                    a: 1,
                    s: 'Across a period, atomic number increases (more protons) but electrons are added to the same shell. Increased effective nuclear charge pulls electrons closer, decreasing atomic radius.'
                }
            ],
            medium: [
                {
                    q: 'The element with electronic configuration [Ar] 3d⁵ 4s¹ is:',
                    o: [
                        'Vanadium',
                        'Chromium',
                        'Manganese',
                        'Iron'
                    ],
                    a: 1,
                    s: 'Chromium (Cr, Z=24) has [Ar] 3d⁵ 4s¹ instead of expected 3d⁴ 4s². Half-filled 3d⁵ provides extra stability. Similarly, Cu is [Ar] 3d¹⁰ 4s¹ (fully filled 3d).'
                },
                {
                    q: 'Among Na, Mg, Al, and Si, the element with the highest ionization energy is:',
                    o: [
                        'Na',
                        'Mg',
                        'Al',
                        'Si'
                    ],
                    a: 3,
                    s: 'IE increases across a period (left to right) due to increasing nuclear charge. Order: Na < Al < Mg < Si. Anomaly: Mg > Al because Mg has a fully filled 2s² (extra stable).'
                },
                {
                    q: 'Diagonal relationship exists between:',
                    o: [
                        'Li and Na',
                        'Li and Mg',
                        'Na and K',
                        'Be and Ca'
                    ],
                    a: 1,
                    s: 'Li and Mg show diagonal relationship: similar charge/size ratio leads to similar properties. Both form nitrides directly, carbonates decompose on heating, and they don\'t form superoxides.'
                },
                {
                    q: 'Which oxide is amphoteric?',
                    o: [
                        'Na₂O',
                        'MgO',
                        'Al₂O₃',
                        'P₂O₅'
                    ],
                    a: 2,
                    s: 'Al₂O₃ is amphoteric — reacts with both acids (→ AlCl₃ + H₂O) and bases (→ NaAlO₂ + H₂O). Na₂O and MgO are basic. P₂O₅ is acidic.'
                },
                {
                    q: 'Electron affinity is most negative (highest magnitude) for:',
                    o: [
                        'F',
                        'Cl',
                        'Br',
                        'I'
                    ],
                    a: 1,
                    s: 'Chlorine has the most negative electron affinity (−349 kJ/mol). Fluorine\'s small size causes electron-electron repulsion in the compact 2p shell, reducing its EA to −328 kJ/mol.'
                },
                {
                    q: 'Lanthanide contraction is caused by:',
                    o: [
                        'Poor shielding by 4f electrons',
                        'Expansion of 5d orbitals',
                        'Increase in atomic number',
                        'Addition of 6p electrons'
                    ],
                    a: 0,
                    s: 'Lanthanide contraction occurs because 4f electrons are poor shielders of nuclear charge. As 4f fills across lanthanides, effective nuclear charge increases, shrinking atomic/ionic radii progressively.'
                }
            ],
            hard: [
                {
                    q: 'The correct order of second ionization energies is:',
                    o: [
                        'Na > Mg > Al > Si',
                        'Si > Al > Mg > Na',
                        'Na > Al > Mg > Si',
                        'Mg > Na > Si > Al'
                    ],
                    a: 0,
                    s: 'For second IE: Na has the highest because removing 2nd electron means breaking into noble gas core (1s²2s²2p⁶ → 2p⁵). IE₂ order: Na >> Mg > Al > Si. Removing from stable core is extremely difficult.'
                },
                {
                    q: 'The electronegativity of elements in Pauling scale follows:',
                    o: [
                        'F > O > N > Cl',
                        'F > O > Cl > N',
                        'F > Cl > O > N',
                        'O > F > Cl > N'
                    ],
                    a: 1,
                    s: 'Pauling electronegativity: F (4.0) > O (3.5) > Cl (3.0) > N (3.0). F and O are in period 2 with small size. Cl is larger but still has high nuclear charge. N equals Cl on this scale.'
                },
                {
                    q: 'Which statement about transition metals is correct?',
                    o: [
                        'All have coloured ions',
                        'They show variable oxidation states due to availability of ns and (n-1)d electrons',
                        'All are diamagnetic',
                        'They have very low melting points'
                    ],
                    a: 1,
                    s: 'Transition metals show variable oxidation states because both ns and (n-1)d electrons have similar energies and can participate in bonding. Not all ions are coloured (d⁰ and d¹⁰ are colourless).'
                },
                {
                    q: 'The magnetic moment of Fe²⁺ (3d⁶, high spin) is approximately:',
                    o: [
                        '0 BM',
                        '2.83 BM',
                        '4.90 BM',
                        '5.92 BM'
                    ],
                    a: 2,
                    s: 'Fe²⁺ in high spin: 3d⁶ → t₂g⁴ eg² (4 unpaired electrons). μ = √(n(n+2)) = √(4×6) = √24 ≈ 4.90 BM. Low spin Fe²⁺ would have 0 unpaired electrons.'
                },
                {
                    q: 'KMnO₄ in acidic medium acts as:',
                    o: [
                        'A reducing agent (Mn²⁺ → Mn⁷⁺)',
                        'An oxidizing agent (Mn⁷⁺ → Mn²⁺)',
                        'A catalyst',
                        'Neither oxidizing nor reducing'
                    ],
                    a: 1,
                    s: 'KMnO₄ in acidic medium: Mn goes from +7 to +2 (gains 5 electrons per Mn). It is a powerful oxidizing agent. MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. Purple → colorless.'
                }
            ]
        },
        {
            name: 'Coordination Compounds & Metallurgy',
            slug: 'coordination-metallurgy',
            easy: [
                {
                    q: 'Coordination number refers to the number of:',
                    o: [
                        'Atoms in a molecule',
                        'Ligand donor atoms bonded to central metal',
                        'Electrons in outer shell',
                        'Bonds in a compound'
                    ],
                    a: 1,
                    s: 'Coordination number is the number of ligand donor atoms directly bonded to the central metal ion. For [Co(NH₃)₆]³⁺, CN = 6 (six N atoms from six NH₃ molecules).'
                },
                {
                    q: 'Bauxite is the ore of:',
                    o: [
                        'Iron',
                        'Copper',
                        'Aluminium',
                        'Zinc'
                    ],
                    a: 2,
                    s: 'Bauxite (Al₂O₃·2H₂O) is the chief ore of aluminium. Aluminium is extracted by electrolysis of alumina dissolved in cryolite (Hall-Héroult process).'
                },
                {
                    q: 'A monodentate ligand donates:',
                    o: [
                        'No electron pairs',
                        'One electron pair',
                        'Two electron pairs',
                        'Three electron pairs'
                    ],
                    a: 1,
                    s: 'A monodentate ligand has one donor atom that donates one lone pair to the metal. Examples: NH₃ (N donor), Cl⁻, H₂O (O donor), CN⁻ (C donor).'
                },
                {
                    q: 'In the blast furnace, iron ore is reduced by:',
                    o: [
                        'Hydrogen',
                        'Carbon monoxide',
                        'Aluminium',
                        'Electricity'
                    ],
                    a: 1,
                    s: 'In blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Carbon monoxide (formed from coke: C + O₂ → CO₂, CO₂ + C → 2CO) acts as the reducing agent at ~700°C.'
                },
                {
                    q: 'EDTA is an example of a _____ ligand:',
                    o: [
                        'Monodentate',
                        'Bidentate',
                        'Tetradentate',
                        'Hexadentate'
                    ],
                    a: 3,
                    s: 'EDTA (ethylenediaminetetraacetic acid) is a hexadentate ligand — it can bind through 2 nitrogen atoms and 4 carboxylate oxygen atoms, forming very stable chelate complexes.'
                }
            ],
            medium: [
                {
                    q: 'The IUPAC name of [Cr(NH₃)₃Cl₃] is:',
                    o: [
                        'Triamminetrichlorochromium(III)',
                        'Trichlorotriamminechromium(III)',
                        'Chromium triammine trichloride',
                        'Triamminetrichloridochromium(III)'
                    ],
                    a: 3,
                    s: 'IUPAC naming rules: ligands in alphabetical order (ammine before chlorido), then metal name with oxidation state. Cr: x + 0(3) + (−1)(3) = 0 → x = +3. Name: triamminetrichloridochromium(III).'
                },
                {
                    q: 'Crystal field splitting energy (Δ₀) in an octahedral field is:',
                    o: [
                        'Less than in tetrahedral field',
                        'Greater than in tetrahedral field',
                        'Equal to tetrahedral',
                        'Zero'
                    ],
                    a: 1,
                    s: 'Δ₀ > Δₜ. In fact, Δₜ ≈ (4/9)Δ₀ for the same metal ion and ligands. Octahedral field is stronger because 6 ligands interact with d orbitals more than 4 ligands in tetrahedral geometry.'
                },
                {
                    q: 'Which complex is expected to be coloured?',
                    o: [
                        '[Zn(NH₃)₄]²⁺',
                        '[Ti(H₂O)₆]³⁺',
                        '[Sc(H₂O)₆]³⁺',
                        '[Cu⁺(CN)₄]³⁻'
                    ],
                    a: 1,
                    s: '[Ti(H₂O)₆]³⁺ has d¹ configuration (one unpaired electron that can undergo d-d transition). Zn²⁺ is d¹⁰, Sc³⁺ is d⁰, Cu⁺ is d¹⁰ — all colourless because no d-d transition possible.'
                },
                {
                    q: 'In the froth flotation process, which type of ores are concentrated?',
                    o: [
                        'Oxide ores',
                        'Carbonate ores',
                        'Sulphide ores',
                        'Halide ores'
                    ],
                    a: 2,
                    s: 'Froth flotation concentrates sulphide ores (e.g., ZnS, PbS, CuFeS₂). Sulphide particles are wetted by oil (hydrophobic) and float with froth, while gangue (hydrophilic) sinks.'
                },
                {
                    q: 'Spectrochemical series arranges ligands in order of:',
                    o: [
                        'Size',
                        'Crystal field splitting energy (Δ)',
                        'Charge',
                        'Mass'
                    ],
                    a: 1,
                    s: 'Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < NO₂⁻ < CN⁻ < CO. Weak field (left) → small Δ → high spin. Strong field (right) → large Δ → low spin.'
                },
                {
                    q: 'Leaching of gold ore uses:',
                    o: [
                        'NaOH solution',
                        'NaCN solution',
                        'HCl solution',
                        'H₂SO₄ solution'
                    ],
                    a: 1,
                    s: 'Gold is leached using dilute NaCN solution in presence of air: 4Au + 8NaCN + 2H₂O + O₂ → 4Na[Au(CN)₂] + 4NaOH. Gold is recovered by cementation with zinc dust (MacArthur-Forrest process).'
                }
            ],
            hard: [
                {
                    q: 'The complex [Co(en)₂Cl₂]⁺ shows:',
                    o: [
                        'Only geometrical isomerism',
                        'Only optical isomerism',
                        'Both geometrical and optical isomerism',
                        'No isomerism'
                    ],
                    a: 2,
                    s: '[Co(en)₂Cl₂]⁺ shows both: geometrical (cis and trans forms) and optical isomerism (cis form has non-superimposable mirror images → d and l forms). Trans form has a plane of symmetry so is optically inactive.'
                },
                {
                    q: 'In the thermite process, the reducing agent is:',
                    o: [
                        'Carbon',
                        'Carbon monoxide',
                        'Aluminium',
                        'Hydrogen'
                    ],
                    a: 2,
                    s: 'Thermite reaction: Fe₂O₃ + 2Al → 2Fe + Al₂O₃ (ΔH very negative). Aluminium acts as the reducing agent (more reactive than Fe). The reaction is highly exothermic (~3000°C). Used for welding railway tracks.'
                },
                {
                    q: 'Werner\'s theory was the first to explain:',
                    o: [
                        'Covalent bonding',
                        'The structure and bonding of coordination compounds',
                        'Ionic bonding',
                        'Metallic bonding'
                    ],
                    a: 1,
                    s: 'Alfred Werner (1893) proposed: metal ions have primary valence (oxidation state, satisfied by anions) and secondary valence (coordination number, satisfied by ligands in spatial arrangement). Won Nobel Prize 1913.'
                },
                {
                    q: 'Which isomerism is shown by [CoCl(NH₃)₅]SO₄ and [Co(SO₄)(NH₃)₅]Cl?',
                    o: [
                        'Linkage isomerism',
                        'Ionization isomerism',
                        'Geometrical isomerism',
                        'Coordination isomerism'
                    ],
                    a: 1,
                    s: 'Ionization isomerism: exchange of ions between coordination sphere and outer sphere. [CoCl(NH₃)₅]SO₄ gives SO₄²⁻ in solution. [Co(SO₄)(NH₃)₅]Cl gives Cl⁻ in solution. Different ions in solution.'
                },
                {
                    q: 'Ellingham diagram is used to predict:',
                    o: [
                        'Solubility of salts',
                        'Feasibility of reduction of metal oxides',
                        'Crystal field splitting',
                        'Electrochemical potential'
                    ],
                    a: 1,
                    s: 'Ellingham diagram plots ΔG° vs temperature for metal oxide formation. A metal can reduce the oxide of another metal whose ΔG° line lies above it. Used to select appropriate reducing agents in metallurgy.'
                }
            ]
        }
    ]
};
/* ──── Chapter 4: Chemical Kinetics & Electrochemistry ──── */ const kineticsElectro = {
    name: 'Chemical Kinetics & Electrochemistry',
    slug: 'kinetics-electrochemistry',
    topics: [
        {
            name: 'Rate Laws & Reaction Kinetics',
            slug: 'rate-laws',
            easy: [
                {
                    q: 'The rate of a chemical reaction generally increases with:',
                    o: [
                        'Decrease in temperature',
                        'Increase in temperature',
                        'Decrease in concentration',
                        'Addition of solvent'
                    ],
                    a: 1,
                    s: 'Increasing temperature increases kinetic energy of molecules, leading to more frequent and energetic collisions. Generally, rate doubles for every 10°C rise (Arrhenius equation).'
                },
                {
                    q: 'A catalyst increases the rate of reaction by:',
                    o: [
                        'Increasing temperature',
                        'Increasing pressure',
                        'Lowering activation energy',
                        'Increasing concentration'
                    ],
                    a: 2,
                    s: 'A catalyst provides an alternative reaction pathway with lower activation energy (Ea). More molecules have enough energy to overcome this lower barrier, increasing the reaction rate. Catalyst is not consumed.'
                },
                {
                    q: 'The SI unit of rate of reaction is:',
                    o: [
                        'mol/L',
                        'mol/(L·s)',
                        'L/(mol·s)',
                        's⁻¹'
                    ],
                    a: 1,
                    s: 'Rate = −d[A]/dt = change in concentration per unit time. SI unit: mol L⁻¹ s⁻¹ (or M/s). The unit of rate constant (k) varies with the order of reaction.'
                },
                {
                    q: 'For a first-order reaction, the half-life is:',
                    o: [
                        'Dependent on initial concentration',
                        'Independent of initial concentration',
                        'Inversely proportional to concentration',
                        'Directly proportional to concentration'
                    ],
                    a: 1,
                    s: 'For first-order: t₁/₂ = 0.693/k. Half-life depends only on the rate constant k, not on initial concentration. This is unique to first-order reactions.'
                },
                {
                    q: 'Order of a reaction can be:',
                    o: [
                        'Only a positive integer',
                        'Only zero or positive integer',
                        'Zero, fraction, or integer',
                        'Only 1 or 2'
                    ],
                    a: 2,
                    s: 'Order of reaction is determined experimentally and can be zero, positive integer, negative, or even a fraction. It is NOT related to stoichiometric coefficients. Example: zero-order, first-order, 1.5-order.'
                }
            ],
            medium: [
                {
                    q: 'The Arrhenius equation is k = Ae^(−Ea/RT). If Ea is doubled at the same temperature, the rate constant:',
                    o: [
                        'Doubles',
                        'Halves',
                        'Decreases exponentially',
                        'Remains unchanged'
                    ],
                    a: 2,
                    s: 'In k = Ae^(−Ea/RT), doubling Ea means k = Ae^(−2Ea/RT) = (Ae^(−Ea/RT))^(2/1) approximately — the rate constant decreases exponentially (not just halved). Higher Ea → much slower reaction.'
                },
                {
                    q: 'For a second-order reaction, the unit of rate constant is:',
                    o: [
                        's⁻¹',
                        'mol⁻¹ L s⁻¹',
                        'mol L⁻¹ s⁻¹',
                        'mol⁻² L² s⁻¹'
                    ],
                    a: 1,
                    s: 'For nth order reaction: unit of k = (mol/L)^(1-n) × s⁻¹. For 2nd order: k has units of L mol⁻¹ s⁻¹ (or mol⁻¹ L s⁻¹ or M⁻¹ s⁻¹).'
                },
                {
                    q: 'The rate law for a reaction is rate = k[A][B]². The overall order is:',
                    o: [
                        '1',
                        '2',
                        '3',
                        '4'
                    ],
                    a: 2,
                    s: 'Overall order = sum of exponents = 1 + 2 = 3 (third order). Order w.r.t. A is 1 (first order), order w.r.t. B is 2 (second order).'
                },
                {
                    q: 'Molecularity of reaction refers to:',
                    o: [
                        'Number of molecules in total',
                        'Number of reacting species in the rate-determining step',
                        'Order of the reaction',
                        'Number of products'
                    ],
                    a: 1,
                    s: 'Molecularity is the number of reacting species (atoms, molecules, ions) that collide simultaneously in the rate-determining elementary step. Always a positive integer (1, 2, or rarely 3). Cannot be zero or fractional.'
                },
                {
                    q: 'For a zero-order reaction, the rate:',
                    o: [
                        'Depends on concentration',
                        'Is independent of concentration',
                        'Increases exponentially',
                        'Decreases with time'
                    ],
                    a: 1,
                    s: 'Zero-order: rate = k (constant). Rate is independent of concentration. [A] = [A]₀ − kt (linear decrease). Half-life: t₁/₂ = [A]₀/(2k). Example: enzyme-catalyzed reactions at saturation.'
                },
                {
                    q: 'Temperature coefficient of a reaction is defined as:',
                    o: [
                        'Rate at T+10/Rate at T',
                        'Rate at T/Rate at T+10',
                        'Ea/RT',
                        'k₂/k₁ when T₂ − T₁ = 1'
                    ],
                    a: 0,
                    s: 'Temperature coefficient = k(T+10)/k(T) ≈ rate(T+10)/rate(T). For most reactions, this value is between 2 and 3, meaning the rate roughly doubles or triples for every 10°C rise.'
                }
            ],
            hard: [
                {
                    q: 'For a first-order reaction A → B, 75% of A decomposes in 100 minutes. The half-life is:',
                    o: [
                        '25 min',
                        '50 min',
                        '75 min',
                        '100 min'
                    ],
                    a: 1,
                    s: '75% decomposed = 25% remaining. For first-order: t = (2.303/k) log([A]₀/[A]). 100 = (2.303/k) log(4) = (2.303/k)(0.602). k = 0.01386 min⁻¹. t₁/₂ = 0.693/0.01386 = 50 min. Also: 75% = 2 half-lives → t₁/₂ = 50 min.'
                },
                {
                    q: 'Collision theory states that for a reaction to occur, molecules must collide with:',
                    o: [
                        'Any energy and any orientation',
                        'Sufficient energy and proper orientation',
                        'Only sufficient energy',
                        'Only proper orientation'
                    ],
                    a: 1,
                    s: 'Collision theory: effective collision requires (1) sufficient kinetic energy ≥ activation energy (Ea) AND (2) proper orientation of colliding molecules. Only a fraction of total collisions are effective.'
                },
                {
                    q: 'The rate constant for a first-order reaction is 6.93 × 10⁻³ s⁻¹. The time for 90% completion is:',
                    o: [
                        '100 s',
                        '230 s',
                        '333 s',
                        '500 s'
                    ],
                    a: 2,
                    s: 't = (2.303/k) × log([A]₀/[A]) = (2.303/6.93×10⁻³) × log(10/1) = (2.303/6.93×10⁻³) × 1 = 332.3 ≈ 333 s.'
                },
                {
                    q: 'For a reaction with Ea = 50 kJ/mol, the ratio of rate constants at 300 K and 310 K is approximately: (R = 8.314 J/mol·K)',
                    o: [
                        '1.5',
                        '2.0',
                        '1.27',
                        '3.0'
                    ],
                    a: 1,
                    s: 'Using ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂) = (50000/8.314)(1/300 − 1/310) = 6014.5 × 1.075×10⁻⁴ ≈ 0.647. k₂/k₁ = e^0.647 ≈ 1.91 ≈ 2.0.'
                },
                {
                    q: 'Pseudo-first-order reaction occurs when:',
                    o: [
                        'All reactants are in excess',
                        'One reactant is in large excess, making its concentration effectively constant',
                        'The reaction is endothermic',
                        'A catalyst is present'
                    ],
                    a: 1,
                    s: 'Pseudo-first-order: a second-order (or higher) reaction where one reactant is in such large excess that its concentration barely changes. Example: hydrolysis of ester in excess water — rate = k\'[ester].'
                }
            ]
        },
        {
            name: 'Electrochemistry & Redox',
            slug: 'electrochemistry-redox',
            easy: [
                {
                    q: 'In a galvanic cell, chemical energy is converted to:',
                    o: [
                        'Heat energy',
                        'Electrical energy',
                        'Mechanical energy',
                        'Nuclear energy'
                    ],
                    a: 1,
                    s: 'A galvanic (voltaic) cell converts chemical energy of spontaneous redox reactions into electrical energy. Example: Daniell cell (Zn-Cu cell). The reverse (electrical → chemical) is an electrolytic cell.'
                },
                {
                    q: 'Oxidation involves:',
                    o: [
                        'Gain of electrons',
                        'Loss of electrons',
                        'Gain of protons',
                        'Loss of neutrons'
                    ],
                    a: 1,
                    s: 'Oxidation is loss of electrons (OIL RIG: Oxidation Is Loss, Reduction Is Gain). The substance that loses electrons is oxidized and acts as a reducing agent.'
                },
                {
                    q: 'The standard hydrogen electrode (SHE) has a potential of:',
                    o: [
                        '1.0 V',
                        '−1.0 V',
                        '0.0 V',
                        '0.5 V'
                    ],
                    a: 2,
                    s: 'SHE is the reference electrode with E° = 0.000 V by convention. It consists of a platinum electrode in contact with 1 M H⁺ solution and H₂ gas at 1 atm, 298 K.'
                },
                {
                    q: 'Faraday\'s first law of electrolysis states that mass deposited is proportional to:',
                    o: [
                        'Voltage applied',
                        'Quantity of electricity passed',
                        'Temperature',
                        'Concentration'
                    ],
                    a: 1,
                    s: 'Faraday\'s 1st law: m = ZIt, where m = mass deposited, Z = electrochemical equivalent, I = current, t = time. Mass deposited ∝ quantity of charge (Q = It).'
                },
                {
                    q: 'In electrolysis, reduction occurs at the:',
                    o: [
                        'Anode',
                        'Cathode',
                        'Both electrodes',
                        'Neither electrode'
                    ],
                    a: 1,
                    s: 'In electrolysis: cathode = negative electrode where reduction (gain of electrons) occurs. Anode = positive electrode where oxidation occurs. Remember: An Ox, Red Cat (Anode Oxidation, Reduction Cathode).'
                }
            ],
            medium: [
                {
                    q: 'The Nernst equation relates cell EMF to:',
                    o: [
                        'Temperature only',
                        'Concentration of reactants and products',
                        'Only standard potential',
                        'Pressure only'
                    ],
                    a: 1,
                    s: 'Nernst equation: E = E° − (RT/nF)ln Q = E° − (0.0591/n)log Q at 298 K. It relates cell EMF to standard potential and reaction quotient Q (ratio of product to reactant concentrations).'
                },
                {
                    q: 'The EMF of a cell is positive when:',
                    o: [
                        'ΔG is positive',
                        'ΔG is negative (reaction is spontaneous)',
                        'ΔG is zero',
                        'Reaction is non-spontaneous'
                    ],
                    a: 1,
                    s: 'E_cell > 0 ⟺ ΔG < 0 (spontaneous). Relationship: ΔG = −nFE. Positive EMF means the cell can do electrical work spontaneously. At equilibrium: E = 0 and ΔG = 0.'
                },
                {
                    q: 'Molar conductivity at infinite dilution (Λ°m) is related to ionic conductivities by:',
                    o: [
                        'Λ°m = λ°₊ − λ°₋',
                        'Λ°m = λ°₊ + λ°₋ (Kohlrausch\'s law)',
                        'Λ°m = λ°₊ × λ°₋',
                        'Λ°m = λ°₊ / λ°₋'
                    ],
                    a: 1,
                    s: 'Kohlrausch\'s law of independent migration of ions: Λ°m = ν₊λ°₊ + ν₋λ°₋, where ν are stoichiometric coefficients and λ° are limiting molar conductivities of individual ions.'
                },
                {
                    q: 'How many Faradays are required to deposit 1 mole of Cu from CuSO₄?',
                    o: [
                        '1 F',
                        '2 F',
                        '3 F',
                        '4 F'
                    ],
                    a: 1,
                    s: 'Cu²⁺ + 2e⁻ → Cu. Each Cu²⁺ requires 2 electrons. 1 mole of electrons = 1 Faraday = 96485 C. So 1 mol Cu requires 2 mol e⁻ = 2 Faraday.'
                },
                {
                    q: 'Conductivity of electrolytic solutions increases with:',
                    o: [
                        'Decrease in temperature',
                        'Increase in dilution (up to infinite dilution)',
                        'Addition of non-electrolyte',
                        'Decrease in ionic strength'
                    ],
                    a: 1,
                    s: 'Molar conductivity (Λm) increases with dilution for both strong and weak electrolytes. For strong: slight increase (less interionic attraction). For weak: large increase (more ionization). Both approach Λ°m at infinite dilution.'
                },
                {
                    q: 'Corrosion of iron (rusting) is an:',
                    o: [
                        'Oxidation process at cathode',
                        'Electrochemical process where Fe is oxidized at anodic regions',
                        'Reduction of iron',
                        'Chemical reaction with nitrogen'
                    ],
                    a: 1,
                    s: 'Rusting is electrochemical corrosion. At anodic spots: Fe → Fe²⁺ + 2e⁻ (oxidation). At cathodic spots: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (reduction). Fe²⁺ is further oxidized to Fe₂O₃·xH₂O (rust).'
                }
            ],
            hard: [
                {
                    q: 'For the cell Zn|Zn²⁺(0.1 M)||Cu²⁺(1 M)|Cu, if E° = 1.10 V, the EMF at 298 K is:',
                    o: [
                        '1.10 V',
                        '1.07 V',
                        '1.13 V',
                        '1.04 V'
                    ],
                    a: 2,
                    s: 'Nernst: E = E° − (0.0591/n)log([Zn²⁺]/[Cu²⁺]) = 1.10 − (0.0591/2)log(0.1/1) = 1.10 − (0.02955)(−1) = 1.10 + 0.0296 ≈ 1.13 V.'
                },
                {
                    q: 'The equivalent conductivity of 0.1 N acetic acid is 5.2 mho·cm²·equiv⁻¹ and at infinite dilution is 390.7. The degree of dissociation is:',
                    o: [
                        '0.013',
                        '0.13',
                        '1.3',
                        '0.0013'
                    ],
                    a: 0,
                    s: 'Degree of dissociation α = Λ_c/Λ°_∞ = 5.2/390.7 = 0.0133 ≈ 0.013 (1.3%). This shows acetic acid is a weak electrolyte with very low dissociation at 0.1 N.'
                },
                {
                    q: 'In the lead storage battery during discharge:',
                    o: [
                        'PbO₂ is formed at both electrodes',
                        'PbSO₄ is formed at both electrodes',
                        'Pb is formed at cathode',
                        'H₂SO₄ concentration increases'
                    ],
                    a: 1,
                    s: 'During discharge: Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻. Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O. PbSO₄ forms at both electrodes. H₂SO₄ is consumed (density decreases).'
                },
                {
                    q: 'The standard potential of Ag⁺/Ag is +0.80 V and Cu²⁺/Cu is +0.34 V. In a cell of Ag and Cu:',
                    o: [
                        'Cu is cathode, Ag is anode',
                        'Ag is cathode, Cu is anode',
                        'Both are cathodes',
                        'No current flows'
                    ],
                    a: 1,
                    s: 'Higher E° is cathode (reduction): Ag⁺/Ag (+0.80 V) is cathode. Lower E° is anode (oxidation): Cu/Cu²⁺ (+0.34 V). E°cell = E°cathode − E°anode = 0.80 − 0.34 = 0.46 V.'
                },
                {
                    q: 'Cathodic protection of iron involves:',
                    o: [
                        'Coating with gold',
                        'Connecting to a more active metal like zinc',
                        'Heating the iron',
                        'Coating with copper'
                    ],
                    a: 1,
                    s: 'Cathodic protection: connecting iron to a more electropositive (active) metal like zinc. Zinc acts as sacrificial anode (corrodes instead of iron). Iron becomes cathode (protected). Used for underground pipelines, ship hulls.'
                }
            ]
        }
    ]
};
const neetChemistryChapters = [
    physicalChem,
    organicChem,
    inorganicChem,
    kineticsElectro
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/neet-practice/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "biologyBank",
    ()=>biologyBank,
    "buildAllNEETPracticeSlugs",
    ()=>buildAllNEETPracticeSlugs,
    "getGrandTotalNEETPractice",
    ()=>getGrandTotalNEETPractice,
    "getNEETChapter",
    ()=>getNEETChapter,
    "getNEETChapterQuestionCount",
    ()=>getNEETChapterQuestionCount,
    "getNEETPracticeQuestion",
    ()=>getNEETPracticeQuestion,
    "getNEETPracticeSlugByParams",
    ()=>getNEETPracticeSlugByParams,
    "getNEETQuestionsByDifficulty",
    ()=>getNEETQuestionsByDifficulty,
    "getTotalNEETPracticeQuestions",
    ()=>getTotalNEETPracticeQuestions,
    "neetChemistryBank",
    ()=>neetChemistryBank,
    "neetPhysicsBank",
    ()=>neetPhysicsBank,
    "neetSubjectBanks",
    ()=>neetSubjectBanks,
    "parseNEETPracticeSlug",
    ()=>parseNEETPracticeSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slugify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$biology$2d$botany$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/biology-botany.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$biology$2d$zoology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/biology-zoology.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/physics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$chemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/chemistry.ts [app-client] (ecmascript)");
;
;
;
;
;
/* ─── Combine Biology = Botany + Zoology ─── */ const allBiologyChapters = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$biology$2d$botany$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["botanyChapters"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$biology$2d$zoology$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoologyChapters"]
];
const biologyBank = {
    subject: 'Biology',
    slug: 'biology',
    icon: '🧬',
    chapters: allBiologyChapters
};
const neetPhysicsBank = {
    subject: 'Physics',
    slug: 'physics',
    icon: '⚡',
    chapters: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["physicsChapters"]
};
const neetChemistryBank = {
    subject: 'Chemistry',
    slug: 'chemistry',
    icon: '🧪',
    chapters: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$chemistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetChemistryChapters"]
};
const neetSubjectBanks = [
    biologyBank,
    neetPhysicsBank,
    neetChemistryBank
];
function getNEETQuestionsByDifficulty(subjectSlug, difficulty) {
    const bank = neetSubjectBanks.find((b)=>b.slug === subjectSlug);
    if (!bank) return [];
    return bank.chapters.flatMap((ch)=>ch.topics.flatMap((t)=>t[difficulty]));
}
function getNEETChapter(subjectSlug, chapterSlug) {
    const bank = neetSubjectBanks.find((b)=>b.slug === subjectSlug);
    return bank?.chapters.find((c)=>c.slug === chapterSlug);
}
function buildAllNEETPracticeSlugs() {
    const result = [];
    for (const bank of neetSubjectBanks){
        for (const chapter of bank.chapters){
            for (const topic of chapter.topics){
                for (const diff of [
                    'easy',
                    'medium',
                    'hard'
                ]){
                    const questions = topic[diff];
                    // Build base slugs from question text, then deduplicate
                    const baseSlugs = questions.map((q)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugifyQuestion"])(q.q));
                    const uniqueSlugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slugify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deduplicateSlugs"])(baseSlugs);
                    questions.forEach((_, idx)=>{
                        const slug = `neet-${bank.slug}-${chapter.slug}-${topic.slug}-${diff}-${uniqueSlugs[idx]}`;
                        result.push({
                            slug,
                            params: {
                                subject: bank.slug,
                                chapter: chapter.slug,
                                topic: topic.slug,
                                difficulty: diff,
                                questionIndex: idx + 1
                            }
                        });
                    });
                }
            }
        }
    }
    return result;
}
/* ─── Pre-built slug → params lookup map (built once) ─── */ const _allSlugs = buildAllNEETPracticeSlugs();
const _slugMap = new Map(_allSlugs.map((s)=>[
        s.slug,
        s.params
    ]));
/* ─── Reverse lookup: params → slug ─── */ const _neetParamToSlug = new Map(_allSlugs.map((s)=>[
        `${s.params.subject}|${s.params.chapter}|${s.params.topic}|${s.params.difficulty}|${s.params.questionIndex}`,
        s.slug
    ]));
function getNEETPracticeSlugByParams(subject, chapter, topic, difficulty, questionIndex) {
    return _neetParamToSlug.get(`${subject}|${chapter}|${topic}|${difficulty}|${questionIndex}`) ?? null;
}
function parseNEETPracticeSlug(slug) {
    return _slugMap.get(slug) ?? null;
}
function getNEETPracticeQuestion(params) {
    const bank = neetSubjectBanks.find((b)=>b.slug === params.subject);
    if (!bank) return null;
    const chapter = bank.chapters.find((c)=>c.slug === params.chapter);
    if (!chapter) return null;
    const topic = chapter.topics.find((t)=>t.slug === params.topic);
    if (!topic) return null;
    const questions = topic[params.difficulty];
    return questions[params.questionIndex - 1] ?? null;
}
function getTotalNEETPracticeQuestions(subjectSlug) {
    const bank = neetSubjectBanks.find((b)=>b.slug === subjectSlug);
    if (!bank) return 0;
    return bank.chapters.reduce((sum, ch)=>sum + ch.topics.reduce((tSum, t)=>tSum + t.easy.length + t.medium.length + t.hard.length, 0), 0);
}
function getNEETChapterQuestionCount(chapter) {
    return chapter.topics.reduce((sum, t)=>sum + t.easy.length + t.medium.length + t.hard.length, 0);
}
function getGrandTotalNEETPractice() {
    return neetSubjectBanks.reduce((total, bank)=>total + getTotalNEETPracticeQuestions(bank.slug), 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/questionPageSEO.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/NEETPracticeQuestion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NEET_PRACTICE_SLUGS",
    ()=>NEET_PRACTICE_SLUGS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RouterLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SEOHead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DemoBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinueTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContinueTestModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuestionGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useQuestionGate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/neet-practice/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedSnippet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/questionPageSEO.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
/* ── label helpers ── */ const difficultyLabel = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard'
};
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
const difficultyColor = {
    easy: 'text-green-400 bg-green-500/10 border-green-500/30',
    medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    hard: 'text-red-400 bg-red-500/10 border-red-500/30'
};
const difficultyActiveStyle = {
    easy: 'text-white bg-green-500 border-green-500 shadow-lg shadow-green-500/25',
    medium: 'text-white bg-yellow-500 border-yellow-500 shadow-lg shadow-yellow-500/25',
    hard: 'text-white bg-red-500 border-red-500 shadow-lg shadow-red-500/25'
};
const difficultyInactiveStyle = {
    easy: 'text-green-400 bg-green-500/10 border-green-500/30 hover:bg-green-500/20',
    medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20',
    hard: 'text-red-400 bg-red-500/10 border-red-500/30 hover:bg-red-500/20'
};
const difficultyIcons = {
    easy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    hard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
};
/* ── build slug list once (used by App.tsx for routing) ── */ const allSlugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildAllNEETPracticeSlugs"])();
const NEET_PRACTICE_SLUGS = allSlugs.map(_c = (s)=>s.slug);
_c1 = NEET_PRACTICE_SLUGS;
/* ── Page Component ── */ const NEETPracticeQuestion = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.replace(/^\//, '');
    const { openDemoModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"])();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSolution, setShowSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChapterBrowser, setShowChapterBrowser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [browserExpandedChapter, setBrowserExpandedChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const questionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFirstRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NEETPracticeQuestion.useEffect": ()=>{
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
        }
    }["NEETPracticeQuestion.useEffect"], [
        slug
    ]);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNEETPracticeSlug"])(slug);
    const question = params ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeQuestion"])(params) : null;
    const { shuffledOptions, shuffledAnswer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NEETPracticeQuestion.useMemo": ()=>{
            if (!question) return {
                shuffledOptions: [],
                shuffledAnswer: -1
            };
            const perm = seededShuffle(slug);
            const sOpts = perm.map({
                "NEETPracticeQuestion.useMemo.sOpts": (origIdx)=>question.o[origIdx]
            }["NEETPracticeQuestion.useMemo.sOpts"]);
            const sAns = perm.indexOf(question.a);
            return {
                shuffledOptions: sOpts,
                shuffledAnswer: sAns
            };
        }
    }["NEETPracticeQuestion.useMemo"], [
        slug,
        question
    ]);
    if (!params || !question) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigate"], {
        to: "/",
        replace: true
    }, void 0, false, {
        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
        lineNumber: 114,
        columnNumber: 36
    }, ("TURBOPACK compile-time value", void 0));
    const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetSubjectBanks"].find((b)=>b.slug === params.subject);
    const chapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETChapter"])(params.subject, params.chapter);
    const topicObj = chapter?.topics.find((t)=>t.slug === params.topic);
    const topicName = topicObj?.name ?? params.topic;
    const chapterName = chapter?.name ?? params.chapter;
    const subj = bank.subject;
    const diff = difficultyLabel[params.difficulty];
    const { isGated, onUnlock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuestionGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuestionGate"])(params.questionIndex);
    const testName = `NEET ${subj} — ${chapterName} — ${topicName} (${diff})`;
    /* navigation slugs — use proper SEO slugs */ const topicQuestions = topicObj?.[params.difficulty] ?? [];
    /* ── Dynamic SEO content ── */ const faqItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildNEETPracticeFAQs"])(subj, chapterName, topicName, diff, topicQuestions.length);
    const topicOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTopicOverview"])('NEET', subj, chapterName, topicName, diff);
    const examTips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildExamTips"])('NEET', subj, chapterName);
    const conceptSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildConceptSummary"])('NEET', subj, chapterName, topicName, diff);
    const prevSlug = params.questionIndex > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(params.subject, params.chapter, params.topic, params.difficulty, params.questionIndex - 1) : null;
    const nextSlug = params.questionIndex < topicQuestions.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(params.subject, params.chapter, params.topic, params.difficulty, params.questionIndex + 1) : null;
    const title = `NEET ${subj} — ${topicName} (${diff}) Q${params.questionIndex} | MindPeak`;
    const description = `Practice NEET ${subj} ${diff} level question on ${topicName} (${chapterName}). Attempt the MCQ, check the answer & read the step-by-step solution. Free NEET prep by MindPeak.`;
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: `NEET ${subj} — ${topicName} (${diff}) Q${params.questionIndex}`,
            educationalLevel: params.difficulty === 'easy' ? 'Beginner' : params.difficulty === 'medium' ? 'Intermediate' : 'Advanced',
            about: {
                '@type': 'Thing',
                name: `NEET ${subj} — ${topicName}`
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
                    name: 'NEET Practice',
                    item: 'https://mindpeakinstitute.com/neet-practice'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: chapterName,
                    item: 'https://mindpeakinstitute.com/neet-practice'
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: `${topicName} ${diff} Q${params.questionIndex}`,
                    item: `https://mindpeakinstitute.com/${slug}`
                }
            ]
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFAQSchema"])(faqItems),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questionPageSEO$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLearningResourceSchema"])('NEET', subj, chapterName, topicName, slug, diff)
    ];
    const isAnswered = selectedOption !== null;
    const isCorrect = selectedOption === shuffledAnswer;
    const siblingTopics = chapter?.topics.filter((t)=>t.slug !== params.topic).slice(0, 4) ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SEOHead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEOHead"], {
                title: title,
                description: description,
                jsonLd: jsonLd
            }, void 0, false, {
                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-background pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/",
                                            className: "hover:text-green-500 transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                            to: "/neet-practice",
                                            className: "hover:text-green-500 transition-colors",
                                            children: "NEET Practice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: chapterName
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground",
                                            children: [
                                                topicName,
                                                " (",
                                                diff,
                                                " Q",
                                                params.questionIndex,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: bank.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 p-1 bg-secondary/30 rounded-xl border border-border",
                                                    children: [
                                                        'easy',
                                                        'medium',
                                                        'hard'
                                                    ].map((d)=>{
                                                        const isActive = d === params.difficulty;
                                                        const DiffIcon = difficultyIcons[d];
                                                        const targetSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(params.subject, params.chapter, params.topic, d, 1);
                                                        return targetSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                            to: `/${targetSlug}`,
                                                            className: `inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${isActive ? difficultyActiveStyle[d] : difficultyInactiveStyle[d]}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiffIcon, {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                difficultyLabel[d]
                                                            ]
                                                        }, d, true, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)) : null;
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-3",
                                            children: [
                                                chapterName,
                                                " — ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-500",
                                                    children: topicName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-muted-foreground",
                                            children: [
                                                "NEET ",
                                                subj,
                                                " · ",
                                                diff,
                                                " · Question ",
                                                params.questionIndex,
                                                " of ",
                                                topicQuestions.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mx-auto max-w-4xl px-4 py-12 space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-display font-bold text-xl text-foreground flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "w-5 h-5 text-green-500 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Question ",
                                                    params.questionIndex
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    params.difficulty === 'easy' ? '2-3 min' : params.difficulty === 'medium' ? '4-6 min' : '8-12 min'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground text-lg font-medium leading-relaxed mb-8",
                                        children: question.q
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 mb-6",
                                        children: shuffledOptions.map((option, idx)=>{
                                            let optionClass = 'border-border hover:border-green-500/50 cursor-pointer';
                                            if (isAnswered) {
                                                if (idx === shuffledAnswer) optionClass = 'border-green-500 bg-green-500/10';
                                                else if (idx === selectedOption && !isCorrect) optionClass = 'border-red-500 bg-red-500/10';
                                                else optionClass = 'border-border opacity-60';
                                            } else if (idx === selectedOption) {
                                                optionClass = 'border-green-500 bg-green-500/5';
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>!isAnswered && setSelectedOption(idx),
                                                disabled: isAnswered,
                                                className: `w-full text-left flex items-start gap-4 rounded-lg border p-4 transition-all ${optionClass}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 text-sm font-semibold text-foreground",
                                                        children: String.fromCharCode(65 + idx)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground text-sm sm:text-base leading-relaxed pt-1",
                                                        children: option
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isAnswered && idx === shuffledAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-500 flex-shrink-0 ml-auto mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-4 ${isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-semibold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`,
                                                children: isCorrect ? '✓ Correct!' : `✗ Incorrect — The correct answer is ${String.fromCharCode(65 + shuffledAnswer)}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowSolution(!showSolution),
                                                className: "flex items-center gap-2 text-green-500 font-semibold text-sm mb-3",
                                                children: [
                                                    showSolution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 35
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 68
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showSolution ? 'Hide Solution' : 'Show Solution'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    height: 0
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    height: 'auto'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-secondary/20 p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display font-bold text-foreground mb-2",
                                                            children: "Solution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground leading-relaxed",
                                                            children: question.s
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mt-8 pt-5 border-t border-border",
                                        children: [
                                            prevSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/${prevSlug}`,
                                                className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-green-500 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Q",
                                                    params.questionIndex - 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    params.questionIndex,
                                                    " / ",
                                                    topicQuestions.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            nextSlug ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/${nextSlug}`,
                                                className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-green-500 transition-colors",
                                                children: [
                                                    "Q",
                                                    params.questionIndex + 1,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 47
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                    children: [
                                        {
                                            label: 'Chapter',
                                            value: chapterName
                                        },
                                        {
                                            label: 'Topic',
                                            value: topicName
                                        },
                                        {
                                            label: 'Difficulty',
                                            value: diff
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-lg bg-secondary/30 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    className: "w-5 h-5 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-foreground",
                                                            children: item.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowChapterBrowser(!showChapterBrowser);
                                            setBrowserExpandedChapter(null);
                                        },
                                        className: "w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                        className: "w-5 h-5 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-display font-semibold text-foreground text-sm sm:text-base",
                                                                children: "Choose a Different Chapter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground mt-0.5",
                                                                children: [
                                                                    bank.subject,
                                                                    " — ",
                                                                    bank.chapters.length,
                                                                    " chapters available"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-5 h-5 text-muted-foreground transition-transform ${showChapterBrowser ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showChapterBrowser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: 'auto'
                                        },
                                        className: "border-t border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-2 max-h-[60vh] overflow-y-auto",
                                            children: bank.chapters.map((ch)=>{
                                                const isCurrent = ch.slug === params.chapter;
                                                const isExp = browserExpandedChapter === ch.slug;
                                                const qCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETChapterQuestionCount"])(ch);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `rounded-lg border overflow-hidden ${isCurrent ? 'border-green-500/50 bg-green-500/5' : 'border-border/50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setBrowserExpandedChapter(isExp ? null : ch.slug),
                                                            className: "w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/20 transition-colors text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            className: "w-4 h-4 text-green-500 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-medium text-foreground flex items-center gap-2",
                                                                                    children: [
                                                                                        ch.name,
                                                                                        isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full",
                                                                                            children: "Current"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                            lineNumber: 346,
                                                                                            columnNumber: 47
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-muted-foreground",
                                                                                    children: [
                                                                                        ch.topics.length,
                                                                                        " topics · ",
                                                                                        qCount,
                                                                                        " Qs"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                    lineNumber: 348,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: `w-4 h-4 text-muted-foreground transition-transform ${isExp ? 'rotate-180' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isExp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-border/50 p-3 space-y-2",
                                                            children: ch.topics.map((t)=>{
                                                                const counts = {
                                                                    easy: t.easy.length,
                                                                    medium: t.medium.length,
                                                                    hard: t.hard.length
                                                                };
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-md bg-secondary/10 p-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-foreground mb-2",
                                                                            children: t.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-3 gap-2",
                                                                            children: [
                                                                                'easy',
                                                                                'medium',
                                                                                'hard'
                                                                            ].map((d)=>{
                                                                                const count = counts[d];
                                                                                if (count === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, d, false, {
                                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                    lineNumber: 363,
                                                                                    columnNumber: 63
                                                                                }, ("TURBOPACK compile-time value", void 0));
                                                                                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(bank.slug, ch.slug, t.slug, d, 1);
                                                                                const DIcon = difficultyIcons[d];
                                                                                return s ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                                                    to: `/${s}`,
                                                                                    className: `flex flex-col items-center gap-1 px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all hover:scale-[1.03] ${difficultyColor[d]}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DIcon, {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                            lineNumber: 368,
                                                                                            columnNumber: 43
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: difficultyLabel[d]
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                            lineNumber: 369,
                                                                                            columnNumber: 43
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-normal opacity-70",
                                                                                            children: [
                                                                                                count,
                                                                                                " Qs"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                            lineNumber: 370,
                                                                                            columnNumber: 43
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, d, true, {
                                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                    lineNumber: 367,
                                                                                    columnNumber: 41
                                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, d, false, {
                                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                                    lineNumber: 372,
                                                                                    columnNumber: 43
                                                                                }, ("TURBOPACK compile-time value", void 0));
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, t.slug, true, {
                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, ch.slug, true, {
                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedSnippet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedSnippet"], {
                                question: `What is ${topicName} in NEET ${subj}?`,
                                answer: topicOverview
                            }, void 0, false, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-5 h-5 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            topicName,
                                            " — Concept Overview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted-foreground leading-relaxed",
                                        children: conceptSummary.map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: para
                                            }, i, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 400,
                                                columnNumber: 48
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-5 h-5 text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " NEET ",
                                            subj,
                                            " Tips — ",
                                            chapterName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: examTips.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tip
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                className: "rounded-xl bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display font-bold text-xl text-foreground mb-3",
                                        children: "Want Detailed Solutions with a Personal Mentor?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-6 max-w-lg mx-auto",
                                        children: "Get step-by-step solutions explained live in 1-on-1 sessions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openDemoModal,
                                        className: "inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors",
                                        children: [
                                            "Book Free Demo Class ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 424,
                                                columnNumber: 36
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            siblingTopics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-foreground mb-4",
                                        children: [
                                            "More from ",
                                            chapterName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                        children: siblingTopics.map((t)=>{
                                            const linkSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(params.subject, params.chapter, t.slug, 'easy', 1);
                                            if (!linkSlug) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: `/${linkSlug}`,
                                                className: "rounded-lg border border-border bg-card/50 p-4 hover:border-green-500/50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-foreground",
                                                        children: t.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: [
                                                            t.easy.length + t.medium.length + t.hard.length,
                                                            " questions"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, t.slug, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 437,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-foreground mb-4",
                                        children: "NEET Practice — All Subjects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neetSubjectBanks"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-border bg-card/50 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: b.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            b.subject,
                                                            b.slug === params.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded-full",
                                                                children: "Current"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 51
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5",
                                                        children: b.chapters.slice(0, 5).map((ch)=>{
                                                            const firstTopic = ch.topics[0];
                                                            if (!firstTopic) return null;
                                                            const linkSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$neet$2d$practice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNEETPracticeSlugByParams"])(b.slug, ch.slug, firstTopic.slug, 'easy', 1);
                                                            if (!linkSlug) return null;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                                    to: `/${linkSlug}`,
                                                                    className: "text-xs text-muted-foreground hover:text-green-500 transition-colors",
                                                                    children: ch.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, ch.slug, false, {
                                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, b.slug, true, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 450,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-bold text-lg text-foreground mb-4",
                                        children: [
                                            "NEET ",
                                            subj,
                                            " Resources"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            {
                                                label: 'NEET Coaching',
                                                to: '/neet-coaching'
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
                                                label: 'NEET Practice Hub',
                                                to: '/neet-practice'
                                            },
                                            {
                                                label: 'Free Trial',
                                                to: '/free-trial'
                                            },
                                            {
                                                label: 'All Courses',
                                                to: '/courses'
                                            }
                                        ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RouterLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                to: link.to,
                                                className: "px-3 py-1.5 rounded-lg bg-card border border-border text-xs text-muted-foreground hover:text-green-500 hover:border-green-500/40 transition-colors",
                                                children: link.label
                                            }, link.to, false, {
                                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFAQ"], {
                        items: faqItems,
                        heading: "NEET Practice",
                        highlight: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFooter"], {
                        extra: `NEET ${subj} Practice Questions — ${chapterName}.`
                    }, void 0, false, {
                        fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContinueTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isGated,
                testName: testName,
                onSuccess: onUnlock
            }, void 0, false, {
                fileName: "[project]/src/views/NEETPracticeQuestion.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(NEETPracticeQuestion, "ics03aA/N7YXjRsfMLzqC/Ss/CI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DemoBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDemoModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuestionGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuestionGate"]
    ];
});
_c2 = NEETPracticeQuestion;
const __TURBOPACK__default__export__ = NEETPracticeQuestion;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NEET_PRACTICE_SLUGS$allSlugs.map");
__turbopack_context__.k.register(_c1, "NEET_PRACTICE_SLUGS");
__turbopack_context__.k.register(_c2, "NEETPracticeQuestion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_de77646c._.js.map