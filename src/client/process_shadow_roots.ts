(function processShadowRootsOnLoad() {
  function attachShadowRoots(root: Document | ShadowRoot) {
    const templateNodes = root.querySelectorAll("template[shadowroot]");
    const templates = [...templateNodes] as HTMLTemplateElement[];

    templates.forEach((template) => {
      const mode = template.getAttribute("shadowroot") as ShadowRootMode ?? 'open';
      const parentNode = template.parentNode as HTMLElement;
      const shadowRoot = parentNode.attachShadow({ mode });
      shadowRoot.appendChild(template.content);
      template.remove();
      attachShadowRoots(shadowRoot);
    });
  }

  function supportsDeclarativeShadowDOM() {
    return HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot');
  }

  window.addEventListener('load', () => {
    if (!supportsDeclarativeShadowDOM()) {
      attachShadowRoots(document);
    }
  }, { once: true });
})();
