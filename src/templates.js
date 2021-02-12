import {row, col} from './utils'

function title(block) {
    return `${row(col(block.value))}`
    // return `
    // <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    //     <div class="row">
    // `
}

function text(block) {
    return `
    <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        <div class="row">
    `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
    return `
         <div class="row">
            ${html.join('')}
         </div>
    `
}

function image(block) {
    return `
    <div class="row">            
                <img src="${block.value}">           
        </div>        
    `
}

export const templates = {
    title,
    text,
    columns,
    image
}