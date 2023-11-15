import requests
import argparse


def send_telegram_message(
        bot_token,
        chat_id,
        message_thread_id,
        actor,
        message,
        repository,
        commit_url,
        info,
        pr_title,
        pr_number,
        pr_author,
        pr_base_branch,
        pr_head_branch,
        pr_url,
):
    message = f"{actor} created commit:\n" \
              f"Commit message: {message}\n" \
              f"Repository: {repository}\n" \
              f"See changes: {commit_url}\n" \
              f"\n{info}\n"

    if pr_title:
        message += f"\nPR Information:" \
                   f"\nTitle: {pr_title}" \
                   f"\nPR Number: {pr_number}" \
                   f"\nAuthor: {pr_author}" \
                   f"\nBase Branch: {pr_base_branch}" \
                   f"\nHead Branch: {pr_head_branch}" \
                   f"\nURL: {pr_url}"

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    params = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML',
        'message_thread_id': message_thread_id
    }

    response = requests.post(url, params=params)

    if response.status_code == 200:
        print("Message sent successfully!")
    else:
        print(f"Failed to send message. Status code: {response.status_code}")
        print(response.text)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Send a Telegram message.')
    parser.add_argument('--bot_token', required=True)
    parser.add_argument('--chat_id', required=True)
    parser.add_argument('--message_thread_id')
    parser.add_argument('--actor', required=True)
    parser.add_argument('--message')
    parser.add_argument('--repository')
    parser.add_argument('--commit_url')
    parser.add_argument('--info')
    parser.add_argument('--pr_title')
    parser.add_argument('--pr_number')
    parser.add_argument('--pr_author')
    parser.add_argument('--pr_base_branch')
    parser.add_argument('--pr_head_branch')
    parser.add_argument('--pr_url')

    args = parser.parse_args()

    send_telegram_message(
        args.bot_token, args.chat_id, args.message_thread_id, args.actor,
        args.message, args.repository, args.commit_url, args.info, args.pr_title,
        args.pr_number, args.pr_author, args.pr_base_branch,
        args.pr_head_branch, args.pr_url
    )
