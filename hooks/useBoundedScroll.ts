import clampNumber from "@/utils/clamp-number";
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function useBoundedScroll(bounds: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - previous;

    const newHeight = clampNumber(scrollYBounded.get() + diff, 0, bounds);

    scrollYBounded.set(newHeight);
  });

  return { scrollYBounded, scrollYBoundedProgress };
}
