import {
  useLocation,
  useNavigate,
  useParams as useRRParams,
} from "react-router-dom";

export function usePathname() {
  return useLocation().pathname;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (url: string) => navigate(url),
    replace: (url: string) => navigate(url, { replace: true }),
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
    prefetch: () => {},
  };
}

export function useSearchParams() {
  const location = useLocation();
  return [new URLSearchParams(location.search)] as const;
}

export function useParams() {
  return useRRParams();
}

export function redirect(url: string) {
  window.location.href = url;
}

export function notFound() {
  throw new Error("Not Found");
}
