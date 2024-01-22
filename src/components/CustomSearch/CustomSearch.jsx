
export default function CustomSearch () {
    const matchOption = (option, inputValue) =>
        option.content.toLowerCase().includes((inputValue || '').toLowerCase());

    const mask = [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ];

    const cards = [
        {
            key: 'Карта 1',
            content: '4035 5010 0000 0008',
        },
        {
            key: 'Карта 2',
            content: '4360 0000 0100 0005',
        },
        {
            key: 'Карта 3',
            content: '8171 9999 2766 0000',
        },
        {
            key: 'Карта 4',
            content: '5204 2477 5000 1471',
        },
        {
            key: 'Карта 5',
            content: '4111 1111 1111 1111',
        },
    ];

    const CardOption = (props) => (
        <BaseOption {...props}>
            <div style={{ padding: 'var(--gap-s)' }}>
                <Typography.Text view='component'>{props.option.content}</Typography.Text>
                <Gap size='2xs' />
                <Typography.Text view='primary-small' color='secondary'>
                    {props.option.key}
                </Typography.Text>
            </div>
        </BaseOption>
    );

    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const handleInput = (_, { value }) => {
        setValue(value);
    };

    const handleChange = ({ selected }) => {
        const value = selected ? selected.content : null;
        setValue(value);
        if (value && inputRef.current) {
            requestAnimationFrame(() =>
                inputRef.current.setSelectionRange(value.length, value.length),
            );
        }
    };

    const filteredOptions = cards.filter((option) => matchOption(option, value));

    return (
        <div style={{ width: isMobile() ? '100%' : 320 }}>
            <InputAutocomplete
                // breakpoint={BREAKPOINT}
                size='m'
                options={filteredOptions}
                selected={[]}
                label='Маскированный ввод счёта'
                placeholder='Счёт'
                onInput={handleInput}
                onChange={handleChange}
                value={value}
                Option={CardOption}
                // Input={MaskedInput}
                block={true}
                inputProps={{
                    ref: inputRef,
                    mask,
                    // clear: isMobile(),
                    // onClear: () => setValue(''),
                }}
            />
        </div>
    );
}