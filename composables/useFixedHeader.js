import { ref, onMounted, onUnmounted } from 'vue';

export function useFixedHeader(headerRef) {
  const styles = ref({});

  const updateStyles = () => {
    // Only try to access `window.scrollY` if we're in a browser environment
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY || 0;
      styles.value = {
        transform: `translateY(${scrollY}px)`,
      };
    }
  };

  onMounted(() => {
    updateStyles(); // Run it once on mount

    // Listen for scroll events
    window.addEventListener('scroll', updateStyles);
  });

  onUnmounted(() => {
    // Clean up listener on unmount
    window.removeEventListener('scroll', updateStyles);
  });

  return { styles };
}
