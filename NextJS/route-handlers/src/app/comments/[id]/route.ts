import { redirect } from "next/navigation"
import {comments} from "../data"

// The second parameter to handler function is the context object
// Currently, the value of context is `params` which is an object containing the dynamic route parameters 
// for the current route. So from context, we can de-structure params.
// Params is an object that contains the ID route parameter which is of type string.


// For the request type in the context of NextJS, the type we're actually dealing with is NextRequest
// The NextRequest object provides convenient methods for managing query parameters with ease.

export async function GET(
    request: Request,
    { params }: { params: {id: string} }
) 

{
    if (parseInt(params.id) > comments.length) {
        redirect("/comments")
    }
    const comment = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(comment)
}


export async function PATCH(
    request: Request,
    { params }: { params: {id: string} }
) 

{
    const body = await request.json()
    const { text } = body

    // Find the comment to update.
    const index = comments.findIndex(
        comment => comment.id === parseInt(params.id)   
    )

    comments[index].text = text
    return Response.json(comments[index])
}


export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  }