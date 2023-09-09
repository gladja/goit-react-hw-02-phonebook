export const Filter = () => {
  return (
    <>
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            // name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=""
            required
          />
        </label>
      </form>
    </>
  )
}
