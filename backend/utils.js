function createErrorResult(error) 
{
    return {status: 'error', error}
}

function createSuccessfulResult(data) 
{
    return {status: 'data', data}
}

function createResult(error, data) 
{
    if(error)
    {
        return createErrorResult(error)
    } else
    {
        return createSuccessfulResult(data)
    }
}

module.exports =
{
    createErrorResult,
    createSuccessfulResult,
    createResult
}