import { domMax, LazyMotion, m } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

/**
 * [lazy-loading features](https://www.framer.com/motion/lazy-motion/)
 */
export function MotionLazy({ children }: Props) {
  return (
    <LazyMotion strict features={domMax}>
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ height: "100%" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
