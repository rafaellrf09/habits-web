import * as Toast from '@radix-ui/react-toast';

interface ToastProps {
    textTitle: string;
    textDescription: string;
    open: boolean;
}
export function ToastComponent(props: ToastProps) {
    return (
        <Toast.Provider swipeDirection='up' duration={5000} label='Notification'>
            <Toast.Root
                className="bg-zinc-900 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                open={props.open}
                onOpenChange={() => false}
            >
                <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-white text-[15px]">
                    {props.textTitle}
                </Toast.Title>

                <Toast.Description asChild className='text-white'>
                    {props.textDescription}
                </Toast.Description>

                {/* <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
                    <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green-600 text-white shadow-[inset_0_0_0_1px] shadow-green-600 hover:shadow-[inset_0_0_0_1px] hover:shadow-green-400 focus:shadow-[0_0_0_2px] focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">Fechar</button>
                </Toast.Action> */}

            </Toast.Root>

            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>
    )
}