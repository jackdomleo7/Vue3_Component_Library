import { mount, shallowMount } from "@vue/test-utils";
import { JSample } from "@/components";
import { configureAxe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

const axe = configureAxe({
  rules: {
    region: { enabled: false }, // Don't need to check because components are loaded in isolation
  },
});

describe("JSample", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(JSample);

    expect(wrapper.vm).toBeTruthy();
  });

  it("to have no obvious accessibility violations", async () => {
    const wrapper = mount(JSample);

    expect(await axe(wrapper.element)).toHaveNoViolations();
  });

  describe('snapshots', () => {
    it("matches snapshot when mounted", () => {
      const wrapper = mount(JSample);
  
      expect(wrapper.element).toMatchSnapshot();
    });
  
    it("matches snapshot when shallow mounted", () => {
      const wrapper = shallowMount(JSample);
  
      expect(wrapper.element).toMatchSnapshot();
    });
  })
});
