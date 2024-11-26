import React from 'react'

function Tools() {
    return (
        <>

            <section class="tools">
                <div class="tools-container">
                    <h2><i class="fa-solid fa-gear fa-sm" />  Tools I Use <i class="fa-solid fa-gear fa-sm" /> </h2>
                    <div class="tool-set">
                        <div class="tool">
                            <img src="https://static.vecteezy.com/system/resources/previews/024/558/808/original/openai-chatgpt-logo-icon-free-png.png" alt="ChatGPT" />
                            <h3>ChatGPT</h3>
                            <p>AI-based conversational assistant.</p>
                         
                        </div>
                        <div class="tool">
                            <img src="./pics/vscode" alt="VS" />
                            <h3>VSCode</h3>
                            <p>Powerful code editor with extensive features.</p>
                        </div>
                        <div class="tool">
                            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png" alt="GitHub" />
                            <h3>GitHub</h3>
                            <p>Platform for version control and collaboration.</p>
                        </div>
                         
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tools
