import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor='editor'
            preview='preview'
        />
    );
};

export default EditorPage;