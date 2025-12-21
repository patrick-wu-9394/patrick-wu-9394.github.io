import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ref } from 'vue';

describe('MobileDisclaimerSonner', () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('shows warning on mobile and sets session flag', async () => {
    const warningMock = vi.fn();
    vi.doMock('vue3-mobile-detection', () => ({ useMobileDetection: () => ({ isMobile: ref(true) }) }));
    vi.doMock('vue-sonner', () => ({ toast: { warning: warningMock } }));
    const { default: MobileDisclaimerSonner } = await import('../MobileDisclaimerSonner.vue');
    mount(MobileDisclaimerSonner);
    expect(warningMock).toHaveBeenCalled();
    expect(sessionStorage.getItem('mobileDisclaimerShown')).toBe('1');
  });

  it('does not show warning on desktop or tablet', async () => {
    const warningMock = vi.fn();
    vi.doMock('vue3-mobile-detection', () => ({ useMobileDetection: () => ({ isMobile: ref(false) }) }));
    vi.doMock('vue-sonner', () => ({ toast: { warning: warningMock } }));
    const { default: MobileDisclaimerSonner } = await import('../MobileDisclaimerSonner.vue');
    mount(MobileDisclaimerSonner);
    expect(warningMock).not.toHaveBeenCalled();
    expect(sessionStorage.getItem('mobileDisclaimerShown')).toBeNull();
  });
});
