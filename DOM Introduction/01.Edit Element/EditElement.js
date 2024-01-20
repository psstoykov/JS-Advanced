function editElement(ref, match, replacer) {
    // TODO
    const text = ref.textContent;

    const edited = text.split(match).join(replacer)
    ref.textContent = edited
}

