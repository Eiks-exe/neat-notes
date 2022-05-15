import React from "react";

import { useEffect, useState, useRef } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { history, historyKeymap } from '@codemirror/history'
import { indentOnInput } from '@codemirror/language'
import { bracketMatching } from '@codemirror/matchbrackets'
import { lineNumbers, highlightActiveLineGutter, gutter } from '@codemirror/gutter'
import { HighlightStyle, tags } from '@codemirror/highlight'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'

interface Props {
    doc: string
    onChange?: (state : EditorState) => void
}




const useCodeMirror = <T extends Element>(props: Props): [React.MutableRefObject<T | null>, EditorView?] => {
    const fixedHeightEditor = EditorView.theme({
       '&': {
           backgroundColor: 'rgba(255,255,255,0.1)',
           height: '100%',
       },
       'cm-editor':{
           outline: 'none'
       }
    })

    const CustomHighLightStyle = HighlightStyle.define([
        {
            tag: tags.heading1,
            fontSize: '2.9em',
            fontWeight: 'bold',
          },
          {
            tag: tags.heading2,
            fontSize: '2.5em',
            fontWeight: 'bold',
          },
          {
            tag: tags.heading3,
            fontSize: '1.8em',
            fontWeight: 'bold'
          },
          {
              tag: tags.content,
              fontSize: '1.3em'
          }
    ])
    
    const { onChange } = props

    const [editorView, setEditorView] = useState<EditorView>()
    const refContainer = useRef<T>(null)
    
    
    useEffect(()=>{
        if (!refContainer.current) return
        const initialState = EditorState.create({
            doc: props.doc,
            extensions:[
                keymap.of([...defaultKeymap, ...historyKeymap]),
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                }),
                CustomHighLightStyle,
                fixedHeightEditor,
                bracketMatching(),
                indentOnInput(),
                highlightActiveLineGutter(),
                oneDark,
                lineNumbers(),
                EditorView.updateListener.of(update => {
                    if (update.changes){
                        onChange && onChange(update.state)
                    }
                })
            ]
        })

        const view = new EditorView({
            state: initialState,
            parent: refContainer.current,
        })
        setEditorView(view)
    }, [refContainer])
    return [refContainer, editorView]
}

export default useCodeMirror