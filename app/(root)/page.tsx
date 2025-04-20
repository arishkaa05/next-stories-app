import { Container, Title } from '@/shared/components/shared';

export default async function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title
          text="Ваше персональное пространство для историй"
          size="lg"
          className="font-bold mb-5"
        />
        <p className="text-gray-700 mb-20">
          Приложение создано для тех, кто хочет делиться своими историями,
          находить единомышленников и управлять своим профилем. <br />С удобной
          авторизацией, персонализированной страницей профиля и списком историй,
          вы всегда будете в центре событий.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Title
              text="Авторизация"
              size="sm"
              className="font-semibold mb-2"
            />
            <p className="text-gray-600">
              Быстрая и безопасная регистрация или вход через вашу учетную
              запись. Ваши данные под надежной защитой.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Title text="Профиль" size="sm" className="font-semibold mb-2" />
            <p className="text-gray-600">
              Настраивайте свой профиль, добавляйте информацию о себе и делитесь
              своими интересами с другими.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Title text="Истории" size="sm" className="font-semibold mb-2" />
            <p className="text-gray-600">
              Просматривайте список историй с удобной пагинацией, читайте,
              комментируйте и создавайте свои.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
